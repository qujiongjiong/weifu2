$(function () {
    $(".list").click(function () {
        var pageNumber = $(this).children("input:first-child").val();

        return false
    })
    getJson(1)

    $(".edit").click(function () {
        getDepName();
        var id=$(this).parent().parent().children("td:first-child").text();
        getEmpByid(id);
        $("#show").hide();
        $("#add").show();
    })

    $("#submit").click(function () {
        $.ajax({
            url: 'editData',
            type: 'get',
            // async:false,
            data:$("#addForm").serialize(),
            dataType: 'text',
            success: function (data) {
                alert("修改成功")
                $("#show").show();
                $("#add").hide();
            }
        })
    })


})

function getEmpByid(id) {
    $.ajax({
        url: 'findById',
        type: 'get',
        dataType: 'json',
        data:{"id":id},
        success: function (data) {
            console.log(data)
            $("#addForm").children("input[name=emp_id]").val(data.emp_id);
            $("#addForm").children("input[name=emp_name]").val(data.emp_name);
            $("#addForm").children("input[name=gender][value="+data.gender+"]").attr("checked","checked");
            $("#addForm").children("input[name=email]").val(data.email);
            $("option[value="+data.dept_id+"]").attr("selected","selected");
        }
    })
}


//显示部门列表
function getDepName() {
    $.ajax({
        url: 'getDepName',
        type: 'get',
        // async:false,
        dataType: 'json',
        success: function (data) {
            var str = "<option>请选择部门</option>";
            for (var i = 0; i < data.length; i++) {
                str += "<option value=" + data[i].dept_id + ">" + data[i].dept_name + "</option>"
            }
            $("#dep").html("");
            $("#dep").append(str);
        }
    })
}




//删除
/*function del (btn,pageNumber) {
 var td = $(btn).parent().parent().children("td:nth-child(2)")
 var id=parseInt($(td).text())
 alert(id)
 $.ajax({
 url:'empl/del',
 type:'get',
 data:{'id':id},
 dataType:'text',
 success:function (data) {
 getJson(pageNumber)
 }

 })

 }*/


// 显示====================================================================================
function getJson(pageNumber) {
    $.ajax({
        url: 'showPage',
        type: 'POST',
        data: {"pageno": pageNumber},
        async:false,
        dataType: 'json',
        success: function (data) {
            console.log(data)
            showData(data.pageInfo.list)
            showPage(data.pageInfo)
        },

        /*complete:function(){
         $(".del").click(function () {
         var pageNumber = parseInt( $("#pageNumber").text())
         del(this,pageNumber);
         })
         }
         */
    })
}


function showPage(data) {
    $("#pageNumber").html(data.pageNum)
    $("#totalPage").html(data.pages)
    $("#totalRecord").html(data.total)


    /* var a=$(".list");
     if(data.pageNumber==1){
     $(a[1]).removeAttr("href")
     $(a[a.length-2]).attr("href","#")
     $(a[a.length-2]).children("input:first-child").val(data.pageNumber+1);
     }else if(data.pageNumber==data.totalPage){
     $(a[a.length-2]).removeAttr("href")
     $(a[1]).attr("href","#")
     $(a[1]).children("input:first-child").val(data.pageNumber-1);
     }else{
     $(a[a.length-2]).attr("href","#")
     $(a[a.length-2]).children("input:first-child").val(data.pageNumber+1);
     $(a[1]).attr("href","#")
     $(a[1]).children("input:first-child").val(data.pageNumber-1);
     }


     $(a[a.length-1]).children("input:first-child").val(data.totalPage);*/
}

function showData(data) {
    var str = "";
    for (var i = 0; i < data.length; i++) {
        str += "<tr>";
        str += "<td>" + data[i].emp_id + "</td>";
        str += "<td>" + data[i].emp_name + "</td>";
        if (data[i].gender == 0) {
            str += "<td>男</td>";
        } else {
            str += "<td>女</td>";
        }
        str += "<td>" + data[i].email + "</td>";
        str += "<td>" + data[i].dept_name + "</td>";
        str += "<td><button type='button' class='edit'>编辑</button>";
        str += "<button type='button'>删除</button></td>";
        str += "</tr>";
    }
    $("#tb").html("");
    $("#tb").append(str);
}
















//点击提交插入数据
/*  $("#addOk").click(function () {
 /!* var formData = new FormData($("#addEmpl")[0])
 console.log(formData.get("emp_name"))
 console.log(formData.get("gender"))*!/
 var arr = $("#addEmpl").serialize();
 console.log(arr);
 //$.param(arr);
 $.ajax({
 url:'empl/add',
 type:'post',
 data:arr,
 async:false,
 //contentType:"application/x-www-form-urlencoded",
 //cache: false,
 //contentType: false,
 processData: false,
 dataType:'text',
 success:function (data) {
 console.log(data)
 //$("button[class=close]").click();
 if(!confirm(data+"需要继续添加么？")){
 $("input[type=reset]").click()
 $("button[class=close]").click();
 }else {
 $("input[type=reset]").click()
 }
 },
 })
 })
 */
//关闭窗口自动跳转到最后一页
/*$('#myModal').on('hide.bs.modal',
 function() {

 var tr=$("tbody tr")
 console.log(tr.length)
 var totalPagey=parseInt($("#totalPage").text())
 var totalRecord=parseInt($("#totalRecord").text())
 if(totalRecord%5==0){
 console.log("进入跳转1")
 getJson(totalPage+1)
 }else {
 console.log("进入跳转0")
 getJson(totalPage)
 }
 })*/