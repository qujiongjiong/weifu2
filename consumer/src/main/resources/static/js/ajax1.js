$(function () {
    name();
});

function name() {
    $.ajax({
        url:"getcityname",
        type:"post",
        success:function (data) {
            for (var i = 0; i < data.length; i++) {
                $("#s").append("<option>" + data[i].cityName + "</option>");
                $("#d").append("<option>" + data[i].cityName + "</option>");
            }
        }
    });
}

$("#btn").click(function (list) {
    var s=$("#s").get(0).selectedIndex;
    var d=$("#d").get(0).selectedIndex;
    if(s==0){
        alert("请选择起飞城市");
        return false;
    }
    if(d==0){
        alert("请选择到达城市");
        return false;
    }
    if(s==d){
        alert("起飞城市和到达城市不能相同");
        return false;
    }

   $.ajax({
       url:"info1",
       type:"post",
       /*data:{"list":list},
       async:false,
       dataType:"json",*/
       success:function (obj) {
           alert(obj);
               $("#info").show();
               var str="";
               $.each(obj,function (i) {
                   str+="<tr>+" +
                       "<td>"+obj[i].flightNo+"</td>" +
                       "<td>"+obj[i].departureCity+"</td>" +
                       "<td>"+formatDate(obj[i].departureTime)+"</td>" +
                       "<td>"+obj[i].arrivalCity+"</td>" +
                       "<td>"+formatDate(obj[i].departureTime)+"</td>" +
                       "+</tr>"
               });
               $("#table").append(str);

       }
   });

});
function formatDate(time) {
    var $time=new Date(time);
    var year=$time.getFullYear();
    var month=$time.getMonth();
    var date=$time.getDate();
    var hour=$time.getHours();
    var minten=$time.getMinutes();
    return year+"-"+month+"-"+date+" "+hour+"-"+minten;
}

//遍历
function f() {
    $.ajax({
        url:"info",
        type:"post",
        success:function (data) {
            $("#info").show();
            var str="";
            $.each(data,function (i) {
                str+="<tr>+" +
                    "<td>"+data[i].flightNo+"</td>" +
                    "<td>"+data[i].departureCity+"</td>" +
                    "<td>"+formatDate(data[i].departureTime)+"</td>" +
                    "<td>"+data[i].arrivalCity+"</td>" +
                    "<td>"+formatDate(data[i].departureTime)+"</td>" +
                    "+</tr>"
            });
            $("#table").append(str);
        }
    });
}