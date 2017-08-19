/**
 * Created by Break on 2017/1/11.
 */

/*battle_player={
    turn:0,
    might:10,
    intelligence:10,
    agility:10,
    vit:10,

    HP:100,
    HP_MAX:100,
    R_MP:0,
    R_MP_MAX:20,
    B_MP:0,
    B_MP_MAX:20,
    G_MP:0,
    G_MP_MAX:20,
    Y_MP:0,
    Y_MP_MAX:20,
    P_MP:0,
    P_MP_MAX:20,

    set hp(v)       {this.      HP = v >      this.HP_MAX ?     this.HP : v},
    get hp()        {return     this.HP},
    set hp_max(v)   {this.      HP_MAX = v},
    get hp_max()    {return     this.HP_MAX},
    set r_mp(v)     {this.      R_MP = v >      this.R_MP_MAX ?     this.R_MP_MAX : v},
    get r_mp()      {return     this.R_MP},
    set r_mp_max(v) {this.      R_MP_MAX = v},
    get r_mp_max()  {return     this.R_MP_MAX},
    set b_mp(v)     {this.      B_MP = v >      this.B_MP_MAX ?     this.B_MP_MAX : v},
    get b_mp()      {return     this.B_MP},
    set b_mp_max(v) {this.      B_MP_MAX = v },
    get b_mp_max()  {return     this.B_MP_MAX},
    set g_mp(v)     {this.      G_MP = v >      this.G_MP_MAX ?     this.G_MP_MAX : v},
    get g_mp()      {return     this.G_MP},
    set g_mp_max(v) {this.      G_MP_MAX = v },
    get g_mp_max()  {return     this.G_MP_MAX},
    set y_mp(v)     {this.      Y_MP = v >      this.Y_MP_MAX ?     this.Y_MP_MAX : v},
    get y_mp()      {return     this.Y_MP},
    set y_mp_max(v) {this.      Y_MP_MAX = v},
    get y_mp_max()  {return     this.Y_MP_MAX},
    set p_mp(v)     {this.      P_MP = v >      this.P_MP_MAX ?     this.P_MP_MAX : v},
    get p_mp()      {return     this.P_MP},

    set p_mp_max(v) {this.      P_MP_MAX = v},
    get p_mp_max()  {return     this.P_MP_MAX},



    show:function(){
        var str="<table>";

        str+="<tr><td>hp:       </td><td class='progress_bar' data_color='red'>"+    this.hp  +' / '+this.hp_max  +'</td></tr>';
        str+="<tr><td>red_mp:   </td><td class='progress_bar' data_color='red'>"+    this.r_mp+' / '+this.r_mp_max+'</td></tr>';
        str+="<tr><td>blue_mp:  </td><td class='progress_bar' data_color='blue'>"+   this.b_mp+' / '+this.b_mp_max+'</td></tr>';
        str+="<tr><td>green_mp: </td><td class='progress_bar' data_color='green'>"+  this.g_mp+' / '+this.g_mp_max+'</td></tr>';
        str+="<tr><td>yellow_mp:</td><td class='progress_bar' data_color='yellow'>"+ this.y_mp+' / '+this.y_mp_max+'</td></tr>';
        str+="<tr><td>purple_mp:</td><td class='progress_bar' data_color='purple'>"+ this.p_mp+' / '+this.p_mp_max+'</td></tr>';

        str+="<tr><td>might:</td><td>"+this.might+'</td></tr>';
        str+="<tr><td>intelligence:</td><td>"+this.intelligence+'</td></tr>';
        str+="<tr><td>agility:</td><td>"+this.agility+'</td></tr>';
        str+="<tr><td>vit:</td><td>"+this.vit+'</td></tr>';

        str+="</table>";
        $("#left").html(str);

        //<div style='background:???; position:absolute;height:100%;width:???%; top:0 ; left:0;'></div>
        $.each($(".progress_bar"),function(i,n){
            $(n).append("<div style='background:"+$(n).attr('data_color')+"; position:absolute;height:100%;width:"+(eval($(n).text())*100)+"%; top:0 ; left:0;z-index: -1'></div>");
            //$(n).attr('data_color');
            //(eval($(n).text())*100)+'%'
        })
    },
    skill:[
        {name:'hit',text:'',cost:'',use:function(){
            console.log('this.hp='+parent);
        }},
    ]

}*/




player=function(name,div_id,enemy){
    this.name=name;
    var that=this;
    this.enemy=enemy;
    this.div_id=div_id;
    this.turn   =0;
    this.might  =10;
    this.intelligence=10;
    this.agility    =10;
    this.vit    =10;

    var HP          =   50;
    var HP_MAX      =   50;
    var R_MP        =   0;
    var R_MP_MAX    =   20;
    var B_MP        =   0;
    var B_MP_MAX    =   20;
    var G_MP        =   0;
    var G_MP_MAX    =   20;
    var Y_MP        =   0;
    var Y_MP_MAX    =   20;
    var P_MP        =   0;
    var P_MP_MAX    =   20;
    //============访问器
    {
        Object.defineProperty(this, "hp", {
            set: function (v) {
                HP = v > HP_MAX ? HP : v
            },
            get: function () {
                return HP
            }
        });
        Object.defineProperty(this, "hp_max", {
            set: function (v) {
                HP_MAX = v
            },
            get: function () {
                return HP_MAX
            }
        });
        Object.defineProperty(this, "r_mp", {
            set: function (v) {
                R_MP = v > R_MP_MAX ? R_MP : v
            },
            get: function () {
                return R_MP
            }
        });
        Object.defineProperty(this, "r_mp_max", {
            set: function (v) {
                R_MP_MAX = v
            },
            get: function () {
                return R_MP_MAX
            }
        });
        Object.defineProperty(this, "b_mp", {
            set: function (v) {
                B_MP = v > B_MP_MAX ? B_MP : v
            },
            get: function () {
                return B_MP
            }
        });
        Object.defineProperty(this, "b_mp_max", {
            set: function (v) {
                B_MP_MAX = v
            },
            get: function () {
                return B_MP_MAX
            }
        });
        Object.defineProperty(this, "g_mp", {
            set: function (v) {
                G_MP = v > G_MP_MAX ? G_MP : v
            },
            get: function () {
                return G_MP
            }
        });
        Object.defineProperty(this, "g_mp_max", {
            set: function (v) {
                G_MP_MAX = v
            },
            get: function () {
                return G_MP_MAX
            }
        });
        Object.defineProperty(this, "y_mp", {
            set: function (v) {
                Y_MP = v > Y_MP_MAX ? Y_MP : v
            },
            get: function () {
                return Y_MP
            }
        });
        Object.defineProperty(this, "y_mp_max", {
            set: function (v) {
                Y_MP_MAX = v
            },
            get: function () {
                return Y_MP_MAX
            }
        });
        Object.defineProperty(this, "p_mp", {
            set: function (v) {
                P_MP = v > P_MP_MAX ? P_MP : v
            },
            get: function () {
                return P_MP
            }
        });
        Object.defineProperty(this, "p_mp_max", {
            set: function (v) {
                P_MP_MAX = v
            },
            get: function () {
                return P_MP_MAX
            }
        });
    }


    this.attack=function(v){this.enemy.hp-=v; this.enemy.show();};
    this.show=function(){
        var str="<table>";
        str+="<tr><td>hp:       </td><td class='progress_bar' data_color='red'>"+    this.hp  +' / '+this.hp_max  +'</td></tr>';
        str+="<tr><td>red_mp:   </td><td class='progress_bar' data_color='red'>"+    this.r_mp+' / '+this.r_mp_max+'</td></tr>';
        str+="<tr><td>blue_mp:  </td><td class='progress_bar' data_color='blue'>"+   this.b_mp+' / '+this.b_mp_max+'</td></tr>';
        str+="<tr><td>green_mp: </td><td class='progress_bar' data_color='green'>"+  this.g_mp+' / '+this.g_mp_max+'</td></tr>';
        str+="<tr><td>yellow_mp:</td><td class='progress_bar' data_color='yellow'>"+ this.y_mp+' / '+this.y_mp_max+'</td></tr>';
        str+="<tr><td>purple_mp:</td><td class='progress_bar' data_color='purple'>"+ this.p_mp+' / '+this.p_mp_max+'</td></tr>';
        str+="<tr><td colspan='2'> =======================</td></tr>"
        str+="<tr><td>might:</td><td>"+this.might+'</td></tr>';
        str+="<tr><td>intelligence:</td><td>"+this.intelligence+'</td></tr>';
        str+="<tr><td>agility:</td><td>"+this.agility+'</td></tr>';
        str+="<tr><td>vit:</td><td>"+this.vit+'</td></tr>';
        str+="<tr><td>turn:</td><td>"+this.turn+'</td></tr>';
        str+="</table><p>========================</p>";
        $("#"+this.div_id).html(str);
        //==============条状物显示
        $.each($(".progress_bar"),function(i,n){
            $(n).append("<div style='background:"+$(n).attr('data_color')+"; position:absolute;height:100%;width:"+(eval($(n).text())*100)+"%; top:0 ; left:0;z-index: -1'></div>");
        })
        //====================
        var str_skill='';
        for(var k1 in this.skill){
            var sk=this.skill[k1];
            //<div class='skill'><p>hit</p><p>消耗5red_mp,造成5点伤害</p><p>red_mp:5</p></div>
            var str_skill_1="<div class='skill' onclick='"+this.name+".skill["+k1+"].use()'><p>"+sk.name+"</p><p>"+sk.text+"</p></div>";
            str_skill+=str_skill_1;
        }
        $("#"+this.div_id).append(str_skill);

        if(this.turn>0) {
            console.log(this.div_id+'black');
            $("#" + this.div_id).removeClass('border2');
            $("#" + this.div_id).addClass('border1');
        }else{
            console.log(this.div_id+'white');
            $("#" + this.div_id).removeClass('border1');
            $("#" + this.div_id).addClass('border2');
        }


    };
    //if(that.xiaohao(this)){
    //    console.log(1);
    //}else{
    //    console.log(0);
    //};
    this.skill=[
        {name:'hit',text:'消耗1red_mp,造成5点伤害',cost:{r_mp:5},use:function(){
            if(that.xiaohao(this)){that.attack(5);nextTurn(); that.show();}
        }},
        {name:'heal',text:'消耗5blue_mp,回复5点生命',cost:{b_mp:5},use:function(){
            if(that.xiaohao(this)){that.hp+=5; nextTurn();that.show();}
        }},
        {name:'hit',text:'消耗5green_mp,摧毁敌方生命值,魔法值各一点',cost:{g_mp:5},use:function(){
            if(that.xiaohao(this)){var e=that.enemy;e.r_mp--;e.b_mp--;e.g_mp--;e.y_mp--;e.p_mp--; nextTurn();that.attack(5);that.show();}
        }},
        {name:'hit',text:'消耗5yellow_mp,回复生命值,魔法值各一点',cost:{y_mp:5},use:function(){
            if(that.xiaohao(this)){var e=that;e.r_mp++;e.b_mp++;e.g_mp++;e.y_mp++;e.p_mp++; nextTurn();that.attack(5);that.show();}
        }},
        {name:'run',text:'消耗5purple_mp,增加两移动点数',cost:{p_mp:5},use:function(){
            if(that.xiaohao(this)){that.turn+=5; nextTurn();that.show();}
        }},
    ]
    this.xiaohao=function(skill){
        if(this.turn==0)
            return false;
        for(var k1 in skill.cost){
            if(skill.cost[k1]>this[k1]) {
                console.log('return false');
                return false;
            }
        }
        for(var k1 in skill.cost){
            this[k1]-=skill.cost[k1];
        }

        return true;
    }
}
var battle_player;
var battle_player2;
var battle_player=new player('battle_player','left',battle_player2);
var battle_player2=new player('battle_player2','right',battle_player);
battle_player.enemy=battle_player2;

battle_player.show();



battle_player.mov=mov;