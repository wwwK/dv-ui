/*
 * @Author: Caven
 * @Date: 2020-03-09 10:39:47
 * @Last Modified by: Caven
 * @Last Modified time: 2020-03-09 13:06:31
 */

let sql = `
   DROP TABLE IF EXISTS tb_map_type;
   DROP TABLE IF EXISTS tb_layer_type;
   DROP TABLE IF EXISTS tb_tool_type;
   DROP TABLE IF EXISTS tb_map_list;
   DROP TABLE IF EXISTS tb_layer_list;
   DROP TABLE IF EXISTS tb_setting;

   CREATE TABLE tb_map_type(
     id varchar(50) primary key ,
     name varchar(20) not null,
     label varchar(20) not null
    );


    CREATE TABLE tb_map_style(
      id varchar(50) primary key ,
      name varchar(20) not null,
      label varchar(20) not null,
      map_type_id varchar(50)
     );

    CREATE TABLE tb_layer_type(
      id varchar(50) primary key,
      name varchar(20) not null,
      label varchar(20) not null
     );

     CREATE TABLE tb_tool_type(
      id varchar(50) primary key,
      name varchar(20) not null,
      label varchar(20) not null
     );

     CREATE TABLE tb_map_list(
      id varchar(50) primary key,
      name varchar(20) not null,
      type varchar(20) not null,
      style varchar(20) not null,
      url varchar(200) not null,
      key varchar(50) not null,
      imgUrl varchar(200) not null
     );

     CREATE TABLE tb_layer_list(
      id varchar(50) primary key ,
      name varchar(20) not null,
      type varchar(20) not null,
      url varchar(200) not null,
      visible char(1) default 1
     );

     CREATE TABLE tb_setting(
      id varchar(50) primary key,
      type varchar(20) not null,
      settings text not null
     );

  insert into tb_map_type(id,name,label) values ('5ae4d3a7-706c-3dbb-82e5-4a1edf4a5f73','google','谷歌');
  insert into tb_map_type(id,name,label) values ('c8a9a79c-61ba-11ea-9e87-0221860e9b7e','baidu','百度');
  insert into tb_map_type(id,name,label) values ('53b8db36-9d7a-300d-870e-962ded73380f','amap','高德');
  insert into tb_map_type(id,name,label) values ('c1e36ebb-20cf-3478-a3c9-b029e6bead39','tencent','腾讯');
  insert into tb_map_type(id,name,label) values ('b4f046d0-9ded-355e-b6cd-9c431a3f8bbb','tdt','天地图');
  insert into tb_map_type(id,name,label) values ('d28c312d-ebf9-3c3a-ab6c-335ff873f43e','arcgis','ArcGis');
  insert into tb_map_type(id,name,label) values ('e8010b08-0a13-390a-bdac-cc454a931f16','singel','单图片');
  insert into tb_map_type(id,name,label) values ('243088b3-1bf9-3700-b75e-069c40aa52e5','wmts','WMTS');
  insert into tb_map_type(id,name,label) values ('0075ef3b-5114-3a25-b528-916d37c267f2','xyz','XYZ');
  insert into tb_map_style(id,name,label) values ('15e61fba-80f8-351f-98e8-2f63ad630653','elec','电子图');
  insert into tb_map_style(id,name,label) values ('95da618b-5af2-3903-832d-e62b483d19ec','img','影像图');
  insert into tb_map_style(id,name,label,map_type_id) values ('757d5ba8-e141-34e2-84d1-98bc4656da1e','ter','地形图','5ae4d3a7-706c-3dbb-82e5-4a1edf4a5f73');
  insert into tb_map_style(id,name,label,map_type_id) values ('3ad45d65-61bd-3cd9-b251-0d785b60f88d','dark','黑色','c8a9a79c-61ba-11ea-9e87-0221860e9b7e');
  insert into tb_map_style(id,name,label,map_type_id) values ('26f3b02f-a67c-389d-8525-500de790b958','midnight','午夜蓝','c8a9a79c-61ba-11ea-9e87-0221860e9b7e');

  insert into tb_layer_type(id,name,label) values ('2000c9fc-2500-3a57-aedd-91c7be04648c','3dtile','3D Tile');
  insert into tb_layer_type(id,name,label) values ('7565f6b6-2ac5-3002-844c-9911169e9eef','cluster','聚合');
  insert into tb_layer_type(id,name,label) values ('ca29d7b9-f791-3e17-8856-6e31cb77be20','heat','热区');
  insert into tb_layer_type(id,name,label) values ('80d77a60-8931-3fd6-89c7-512879aabc29','geojson','GeoJson');
  insert into tb_layer_type(id,name,label) values ('e975630d-2eb4-39bb-b2a7-d393f52d33e6','czml','Czml');
   `
export default sql
