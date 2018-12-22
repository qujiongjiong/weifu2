package cn.kgc.mapper;

import cn.kgc.vo.TableToObject;
import com.github.pagehelper.PageInfo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TableToObjectMapper {
    //根据两个条件查询对象
    TableToObject findByCondition(TableToObject tableToObject);

    //根据各种条件联查返回对象两个表或某个表的集合
    List<TableToObject> findByConditonList(TableToObject tableToObject);

    //根据各种条件联查返回对象两个表或某个表的集合
    List<TableToObject> findByConditonList1();

    List<TableToObject> findByConditonList2(@Param("departureCity")Integer departureCity, @Param("arrivalCity") Integer arrivalCity);

    //添加对象
    int addObject(TableToObject tableToObject);

    //编辑对象
    int editObject(TableToObject tableToObject);

    //删除对象
    int deleteObject(Integer primaryKey);

    //分页查询
    PageInfo findPage(Integer pageno, Integer pagesize, TableToObject tableToObject);

}
