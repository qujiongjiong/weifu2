package cn.kgc.vo;

import java.io.Serializable;
import java.util.Date;

public class TableToObject implements Serializable {

    private Integer id;
    private String cityName;

    private Integer fid;
    private String flightNo;
    private Integer departureCity;
    private Date departureTime;
    private Integer arrivalCity;
    private Date arrivalTime;

    public TableToObject() {

    }

    public TableToObject(Integer id) {
        this.id = id;
    }

    public TableToObject(Integer id, String cityName, Integer fid, String flightNo, Integer departureCity, Date departureTime, Integer arrivalCity, Date arrivalTime) {
        this.id = id;
        this.cityName = cityName;
        this.fid = fid;
        this.flightNo = flightNo;
        this.departureCity = departureCity;
        this.departureTime = departureTime;
        this.arrivalCity = arrivalCity;
        this.arrivalTime = arrivalTime;
    }

    @Override
    public String toString() {
        return "TableToObject{" +
                "id=" + id +
                ", cityName='" + cityName + '\'' +
                ", fid=" + fid +
                ", flightNo='" + flightNo + '\'' +
                ", departureCity=" + departureCity +
                ", departureTime=" + departureTime +
                ", arrivalCity=" + arrivalCity +
                ", arrivalTime=" + arrivalTime +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public Integer getFid() {
        return fid;
    }

    public void setFid(Integer fid) {
        this.fid = fid;
    }

    public String getFlightNo() {
        return flightNo;
    }

    public void setFlightNo(String flightNo) {
        this.flightNo = flightNo;
    }

    public Integer getDepartureCity() {
        return departureCity;
    }

    public void setDepartureCity(Integer departureCity) {
        this.departureCity = departureCity;
    }

    public Date getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(Date departureTime) {
        this.departureTime = departureTime;
    }

    public Integer getArrivalCity() {
        return arrivalCity;
    }

    public void setArrivalCity(Integer arrivalCity) {
        this.arrivalCity = arrivalCity;
    }

    public Date getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Date arrivalTime) {
        this.arrivalTime = arrivalTime;
    }
}
