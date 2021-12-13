ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:31983").setExtent([193865.988476, 9202975.603955, 195596.674415, 9203837.709980]);
var wms_layers = [];


        var lyr_WAZE_0 = new ol.layer.Tile({
            'title': 'WAZE',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_GOOGLESATELITE_1 = new ol.layer.Tile({
            'title': 'GOOGLE SATELITE',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_MEBAB0904_2 = new ol.format.GeoJSON();
var features_MEBAB0904_2 = format_MEBAB0904_2.readFeatures(json_MEBAB0904_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MEBAB0904_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MEBAB0904_2.addFeatures(features_MEBAB0904_2);
var lyr_MEBAB0904_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MEBAB0904_2, 
                style: style_MEBAB0904_2,
                interactive: false,
                title: '<img src="styles/legend/MEBAB0904_2.png" /> MEBAB0904'
            });
var format_MEBAB7006_3 = new ol.format.GeoJSON();
var features_MEBAB7006_3 = format_MEBAB7006_3.readFeatures(json_MEBAB7006_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MEBAB7006_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MEBAB7006_3.addFeatures(features_MEBAB7006_3);
var lyr_MEBAB7006_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MEBAB7006_3, 
                style: style_MEBAB7006_3,
                interactive: false,
                title: '<img src="styles/legend/MEBAB7006_3.png" /> MEBAB7006'
            });
var format_MEBAB0997_4 = new ol.format.GeoJSON();
var features_MEBAB0997_4 = format_MEBAB0997_4.readFeatures(json_MEBAB0997_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MEBAB0997_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MEBAB0997_4.addFeatures(features_MEBAB0997_4);
var lyr_MEBAB0997_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MEBAB0997_4, 
                style: style_MEBAB0997_4,
                interactive: false,
                title: '<img src="styles/legend/MEBAB0997_4.png" /> MEBAB0997'
            });

lyr_WAZE_0.setVisible(true);lyr_GOOGLESATELITE_1.setVisible(true);lyr_MEBAB0904_2.setVisible(true);lyr_MEBAB7006_3.setVisible(true);lyr_MEBAB0997_4.setVisible(true);
var layersList = [lyr_WAZE_0,lyr_GOOGLESATELITE_1,lyr_MEBAB0904_2,lyr_MEBAB7006_3,lyr_MEBAB0997_4];
lyr_MEBAB0904_2.set('fieldAliases', {'FID': 'FID', 'FUNDIARIO': 'FUNDIARIO', });
lyr_MEBAB7006_3.set('fieldAliases', {'FID': 'FID', 'FUNDIARIO': 'FUNDIARIO', });
lyr_MEBAB0997_4.set('fieldAliases', {'FID': 'FID', 'FUNDIARIO': 'FUNDIARIO', });
lyr_MEBAB0904_2.set('fieldImages', {'FID': 'TextEdit', 'FUNDIARIO': 'TextEdit', });
lyr_MEBAB7006_3.set('fieldImages', {'FID': 'TextEdit', 'FUNDIARIO': 'TextEdit', });
lyr_MEBAB0997_4.set('fieldImages', {'FID': 'TextEdit', 'FUNDIARIO': 'TextEdit', });
lyr_MEBAB0904_2.set('fieldLabels', {'FID': 'no label', 'FUNDIARIO': 'no label', });
lyr_MEBAB7006_3.set('fieldLabels', {'FID': 'no label', 'FUNDIARIO': 'no label', });
lyr_MEBAB0997_4.set('fieldLabels', {'FID': 'no label', 'FUNDIARIO': 'no label', });
lyr_MEBAB0997_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});