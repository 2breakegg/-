/**
 * Created by Break on 2017/1/11.
 */

/*battle_player2={
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
        $("#right").html(str);

        //<div style='background:???; position:absolute;height:100%;width:???%; top:0 ; left:0;'></div>
        $.each($(".progress_bar"),function(i,n){
            $(n).append("<div style='background:"+$(n).attr('data_color')+"; position:absolute;height:100%;width:"+(eval($(n).text())*100)+"%; top:0 ; left:0;z-index: -1'></div>");
            //$(n).attr('data_color');
            //(eval($(n).text())*100)+'%'
        })
    }/!*,
    mov:function(e){
        mov(e);
        console.log('in'+this.hp);
        this.show();
    }*!/
}*/

//var battle_player2=new player('right',battle_player);
battle_player2.show();



battle_player2.mov=mov;