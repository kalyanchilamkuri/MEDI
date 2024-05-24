package com.bezkoder.spring.login.models;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class suggModel {
    @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String dis;
  private String med;
  private String related;

  public suggModel(String name,String dis,String med, String related){
    this.name=name;
    this.dis=dis;
    this.med=med;
    this.related=related;
  }
  public suggModel(){

  }

  public String getName(){
    return this.name;
  }
  public String getDis(){
    return this.dis;
  }
  public String getMed(){
    return this.med;
  }
  public String getRealted(){

    return this.related;
  }
  public Long getId() {
    return this.id;
  }
  public void setId(Long id) {
    this.id = id;
  }
  public void setName(String name){
    this.name=name;
  }
  public void setDis(String dis){
    this.dis=dis;
  }
  public void setMed(String med){
    this.med=med;
  }
  public void setRelated(String related){
    this.related=related;
  }
  

}
