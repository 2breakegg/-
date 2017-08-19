
var can_click=true;
var map_canvas=$('#map')[0];
var map_ctx=map_canvas.getContext("2d");
var player_now;

var map={
    map_max_x:11,
    map_max_y:11
}
var gem={
    width:50,
    height:50,
    xiaochuliang:3,
    color:new Array("#fff","red","blue","green","yellow","purple","skull","riot"),
    color2:new Array('rgba(255,255,255,0)','rgba(255,0,0,0)','rgba(0,0,255,0)','rgba(255,255,255,0)','rgba(0,255,255,0)','rgba(0,255,0,0)','rgba(255,255,255,0)','rgba(255,255,255,0)','rgba(255,255,255,0)'),
    blink_time:0,
    blink_time_2:300,
}

var gem_arr=new Array();
var gem_selected={
    have:false,
    x:0,
    y:0,
    get x_m(){return this.x*gem.width},
    get y_m(){return this.y*gem.height}
}

var battle_pic=new Object();
var battle_pic_url={
    blue:'./pic/shanzai/blue.png',
    green:'./pic/shanzai/green.png',
    purple:'./pic/shanzai/purple.png',
    red:'./pic/shanzai/red.png',
    riot:'./pic/shanzai/riot.png',
    skull:'./pic/shanzai/skull.png',
    yellow:'./pic/shanzai/yellow.png'
}

function battle_pic_load(){
    for(var k1 in battle_pic_url) {
        battle_pic[k1] = $("<img src='"+battle_pic_url[k1]+"'>")[0];
        //map_ctx.drawImage(p[0], 0, 0, 50, 50);
    }
}
function new_gem_arr(x,y){
    for(yi=0; yi<y; yi++) {
        gem_arr[yi]=new Array();
        for(xi=0; xi<x; xi++) {
            gem_arr[yi].push(Math.floor(Math.random() * (gem.color.length-1)+1));
        }
    }
}
function draw_map() {
    map_ctx.fillStyle='#000';
    map_ctx.fillRect(0,0,2222,2222);
    for (k1 in gem_arr) {
        for(k2 in gem_arr[k1]) {
            if(gem.color[gem_arr[k1][k2]] && gem.color[gem_arr[k1][k2]].indexOf('#') ==-1) {
                map_ctx.drawImage(battle_pic[gem.color[gem_arr[k1][k2]]],k2 * gem.width + 1, k1 * gem.height + 1, gem.width - 2, gem.height - 2);
            }else{
                map_ctx.fillStyle = gem.color[gem_arr[k1][k2]] || gem.color2[gem_arr[k1][k2] - gem.color.length];
                map_ctx.fillRect(k2 * gem.width + 1, k1 * gem.height + 1, gem.width - 2, gem.height - 2);
            }
        }
    }
    if(gem_selected.have) {
        map_ctx.lineWidth = 5;
        map_ctx.strokeStyle = '#fff';
        map_ctx.strokeRect(gem_selected.x_m, gem_selected.y_m, gem.width, gem.width);
    }
}
//==============================下落
function gem_down(){
    //console.log('gem_down');
    var down_arr=new Array();
    for (k1 in gem_arr) {
        for(k2 in gem_arr[k1]) {
            if(gem_arr[k1][k2]>8)
                down_arr[k2]=k1;
        }
    }
    //console.log(down_arr);
    for (var k1 in down_arr) {
        //console.log('down_arr'+k1)
        for(var k2=down_arr[k1] ;k2>=0;k2--){

            if(k2==0){
                gem_arr[k2][k1] =Math.floor(Math.random() * (gem.color.length-1)+1);
            }else {
                gem_arr[k2][k1] = gem_arr[k2 - 1][k1];
            }
        }
    }
    //console.log('arguments.length'+arguments.length)
    draw_map();
    for (k1 in gem_arr) {
        for(k2 in gem_arr[k1]) {
            if(gem_arr[k1][k2]>8) {
                setTimeout('gem_down()', gem.blink_time);
                return
            }
        }
    }
    xiaochu();
}

//==============================闪烁
var xiaochu_arrx;
var shanshuo;
function blink(){
    if(shanshuo==1) {
        can_click=true;
        gem_down()
        return;
    }
    if(shanshuo%2){
        for(k1 in xiaochu_arrx) {
            gem_arr[xiaochu_arrx[k1][1]][xiaochu_arrx[k1][0]]-=gem.color.length;
            //console.log(gem_arr[xiaochu_arrx[k1][1]][xiaochu_arrx[k1][0]])
        }

    }else{
        for(k1 in xiaochu_arrx) {
            gem_arr[xiaochu_arrx[k1][1]][xiaochu_arrx[k1][0]]+=gem.color.length;
            //console.log(gem_arr[xiaochu_arrx[k1][1]][xiaochu_arrx[k1][0]])
        }
    }
    draw_map();
    shanshuo--;
    setTimeout("blink()",gem.blink_time);
}
function gem_mp_add(){
    var arr=new Array();
    for (var k1 in xiaochu_arrx) {
        arr[xiaochu_arrx[k1][2]]=typeof arr[xiaochu_arrx[k1][2]]!='undefined'?++arr[xiaochu_arrx[k1][2]]:1;
    }
    //console.log(arr);
    for (var k1 in arr) {
        if(typeof player_now=='object'){
            switch (k1){
                case '1':this.r_mp+=arr[k1];/*console.log(this.r_mp+'+='+arr[k1])*/;break;
                case '2':this.b_mp+=arr[k1];/*console.log(this.r_mp+'+='+arr[k1])*/;break;
                case '3':this.g_mp+=arr[k1];/*console.log(this.r_mp+'+='+arr[k1])*/;break;
                case '4':this.y_mp+=arr[k1];/*console.log(this.r_mp+'+='+arr[k1])*/;break;
                case '5':this.p_mp+=arr[k1];/*console.log(this.r_mp+'+='+arr[k1])*/;break;
                case '6':this.attack(arr[k1]);/*;console.log(this.attack(arr[k1]));*/break;
                case '7':this.hp+=arr[k1];/*console.log(this.hp+'+='+arr[k1]);*/break;
            }
        }
    }

    if(player_now)
        player_now.show();
}
function xiaochu(){
    var xiaochu_arr=new Array();
    var xiaochu_arr_2=new Array();
    var xiaochuliang=gem.xiaochuliang
    for(var y= 0; y<map.map_max_y;y++){
        for(var x=0; x<map.map_max_x;x++){
            if (xianglian(y,x,0,1) && xianglian(y,x,0,1).length >= xiaochuliang) {
                xiaochu_arr_2=xiaochu_arr_2.concat(xianglian(y,x,0,1))
            }
            if(xianglian(y,x,1,0) && xianglian(y,x,1,0).length >= xiaochuliang){
                xiaochu_arr_2=xiaochu_arr_2.concat(xianglian(y,x,1,0))
            }
            if(xianglian(y,x,1,1) && xianglian(y,x,1,1).length >= xiaochuliang){
                xiaochu_arr_2=xiaochu_arr_2.concat(xianglian(y,x,1,1))
            }
            if(xianglian(y,x,1,-1) && xianglian(y,x,1,-1).length >= xiaochuliang){
                xiaochu_arr_2=xiaochu_arr_2.concat(xianglian(y,x,1,-1))
            }
        }
    }
    if(xiaochu_arr_2.length>0) {
        can_click=false;
        for (var k1 in xiaochu_arr_2) {
            var same = false;
            for (var k2 in xiaochu_arr) {
                if (xiaochu_arr[k2].toString() == xiaochu_arr_2[k1].toString()) {
                    same = true;
                    break;
                }
            }
            same ? null : xiaochu_arr.push(xiaochu_arr_2[k1]);
        }
        //console.log(xiaochu_arr);
        xiaochu_arrx = xiaochu_arr;
        gem_mp_add.call(player_now);
        shanshuo = 4;
        blink();
    }else{
        gem.blink_time=gem.blink_time_2;
        if(player_now) {
            nextTurn();
        }
    }
//        for(k1 in xiaochu_arr) {
//            gem_arr[xiaochu_arr[k1][1]][xiaochu_arr[k1][0]]+=9;
//        }
//        setTimeout(draw_map,100);
}

function xianglian(y,x,y_ud,x_lr){
    var xianglian_arr;
    if(x+x_lr>=map.map_max_x)  return [[x,y,gem_arr[y][x]]];
    if(y+y_ud>=map.map_max_x)  return [[x,y,gem_arr[y][x]]];
    if(gem_arr[y][x]!=gem_arr[y+y_ud][x+x_lr])  return [[x,y,gem_arr[y][x]]];
    xianglian_arr=xianglian(y+y_ud,x+x_lr,y_ud,x_lr);
    xianglian_arr.push([x,y,gem_arr[y][x]]);
    return xianglian_arr;
}

function nextTurn(){
    if(!--player_now.turn) {
        player_now = player_now.enemy;
        player_now.turn=1;
    }
    player_now.show();
    player_now.enemy.show();
}
function mov(e){
    var x_m=e.offsetX;
    var y_m=e.offsetY;
    var x=Math.floor(x_m/gem.width);
    var y=Math.floor(y_m/gem.height);
    if(x<map.map_max_x && y<map.map_max_y) {
        if (gem_selected.have && !(y-gem_selected.y==0 && x-gem_selected.x==0)&&( (y-gem_selected.y <2 && y-gem_selected.y>-2 && x==gem_selected.x) || (x-gem_selected.x <2 && x-gem_selected.x>-2 && y==gem_selected.y) )) {
            var color = gem_arr[y][x];
            gem_arr[y][x]=gem_arr[gem_selected.y][gem_selected.x];
            gem_arr[gem_selected.y][gem_selected.x]=color;
            gem_selected.have = false;
            xiaochu.call(player_now);

        } else {
            //console.log(x + '===' + y);
            gem_selected.have = true;
            gem_selected.x = x;
            gem_selected.y = y;
        }
    }
    this.show();
    draw_map();
}
//===============================单击事件
$('#map').bind("click",function(e){

    if(can_click) {
        player_now.mov(e);
    }
})


battle_pic_load();