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
    })
}

$("#btn").click(function () {
    var add=$("#div").serialize();
    $.ajax({
        url:"add",
        type:"post",
        data:add,
        dataType:"text",
        success:function (res) {
            if(res.trim()=="ok"){
                alert("增加成功");
                window.location="add.html";
            }else{
                alert("添加失败");
            }
        },
        error:function () {
            alert("添加失败");
        }
    });
});
function addStu() {

}