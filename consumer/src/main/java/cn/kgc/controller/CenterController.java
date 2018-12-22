package cn.kgc.controller;

import cn.kgc.service.TableToObjectService;
import cn.kgc.vo.TableToObject;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("html")
public class CenterController {


    @Autowired
    private TableToObjectService tableToObjectService;

    //登录
    @RequestMapping("/login")
    public String login(TableToObject tableToObject, HttpSession session) {
        TableToObject loginuser = tableToObjectService.findByCondition(tableToObject);
        session.setAttribute("loginuser", loginuser);
        return "/index.html";
    }

    //退出登录
    @RequestMapping("/exitLogin")
    public String exitLogin(TableToObject tableToObject, HttpSession session) {
        session.removeAttribute("loginuser");
        return "/login.html";
    }

    //分页查询
    @ResponseBody
    @RequestMapping("/showPage")
    public HashMap<Object, Object> showPage(@RequestParam(defaultValue = "1", required = false) int pageno,
                                            TableToObject tableToObject, HttpSession session) {
        HashMap<Object, Object> map = new HashMap<Object, Object>();
        TableToObject loginuser = (TableToObject) session.getAttribute("loginuser");
        Integer pagesize = 5;
        PageInfo<TableToObject> pageInfo = tableToObjectService.findPage(pageno, pagesize, tableToObject);
        map.put("pageInfo", pageInfo);
        map.put("loginuser", loginuser);
        return map;
    }

    //    //查询所有或条件查询
    //    //首页查询的起点index.html，因为只有有index.html过来，才会执行showData
    //    @ResponseBody
    //    @RequestMapping(value = "/showData.do")
    //    public HashMap<Object,Object> showData(HttpSession session,TableToObject tableToObject) {
    //        HashMap<Object,Object> map=new HashMap<Object,Object>();
    //        TableToObject loginuser=(TableToObject)session.getAttribute("loginuser");
    //        List<TableToObject> list=tableToObjectService.findPage(tableToObject);
    //        map.put("list",list);
    //        map.put("loginuser",loginuser);
    //        return map;
    //    }
    //根据主键查询单条
    @ResponseBody
    @RequestMapping("/findById")
    public TableToObject findById(Integer id) {
        TableToObject object = new TableToObject(id);
        TableToObject tableToObject = tableToObjectService.findByCondition(object);
        return tableToObject;
    }

    //添加
    @RequestMapping("/saveData")
    public String saveData(TableToObject tableToObject) {
        int num = tableToObjectService.addObject(tableToObject);
        return "/index.html";
    }

    //修改
    @ResponseBody
    @RequestMapping("/editData")
    public String editData(TableToObject tableToObject) {
        int num = tableToObjectService.editObject(tableToObject);
        return "qwe";
    }

    //删除
    @RequestMapping("/deleteData")
    public String deleteData(Integer key) {
        int num = tableToObjectService.deleteObject(key);
        return "/index.html";
    }


/*    @ResponseBody
    @RequestMapping("/getDepName")
    public List<TableToObject> getDepName() {
        List<TableToObject> depName = tableToObjectService.getDepName();
        return depName;
    }*/


    @RequestMapping(value = "getcityname")
    public List<TableToObject> getcityname() {
        List<TableToObject> getcityname = tableToObjectService.findByConditonList1();
        return getcityname;
    }

    @RequestMapping(value = "info")
    public List<TableToObject> getInfo() {
        List<TableToObject> info = tableToObjectService.findByConditonList(null);
        for (TableToObject t : info) {
            System.out.println(t.toString());
        }
        return info;
    }

    @RequestMapping(value = "info1")
    @ResponseBody
    public Map<String, Object> getinfo1(HttpServletRequest request, Integer departureCity, Integer arrivalCity) {
        List<TableToObject> list = tableToObjectService.findByConditonList2(departureCity, arrivalCity);
        Map<String,Object>map=new HashMap<String, Object>();
        map.put("list",list);
        return map;
    }
    @RequestMapping(value = "add")
    @ResponseBody
    public String add(TableToObject tableToObject){
        int i = tableToObjectService.addObject(tableToObject);
        if(i>0){
            return "ok";
        }else {
            return "fail";
        }
    }

}
