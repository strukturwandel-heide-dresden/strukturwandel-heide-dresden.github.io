var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Hintergrundbild_2 = new ol.layer.Image({
        opacity: 1,
		'displayInLayerSwitcher': false,        
        title: undefined,
        
        maxResolution:28004.466152261964,

        minResolution:350.0558269032746,

        source: new ol.source.ImageStatic({
            url: "./layers/Hintergrundbild_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
			imageExtent: [364380.897902, 5857704.686666, 1794749.492290, 7515234.208631]
        })
    });
var format_Dresden_3 = new ol.format.GeoJSON();
var features_Dresden_3 = format_Dresden_3.readFeatures(json_Dresden_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dresden_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dresden_3.addFeatures(features_Dresden_3);
var lyr_Dresden_3 = new ol.layer.Vector({
                declutter: false,
				source:jsonSource_Dresden_3,
				'displayInLayerSwitcher': false,
maxResolution:28004.466152261964,
 minResolution:162.17554375571817,

                style: style_Dresden_3,
                popuplayertitle: 'Dresden',
                interactive: true,
				
                title: undefined
            });
var format_Dresden_4 = new ol.format.GeoJSON();
var features_Dresden_4 = format_Dresden_4.readFeatures(json_Dresden_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dresden_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dresden_4.addFeatures(features_Dresden_4);
var lyr_Dresden_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dresden_4,
				'displayInLayerSwitcher': false,
maxResolution:162.17554375571817,
 minResolution:11.201786460904787,

                style: style_Dresden_4,
                popuplayertitle: 'Dresden',
                interactive: true,
				
                title: undefined
            });
var lyr_2025SatellitenbildSommer_5 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025 Satellitenbild | Sommer<br />' ,
        
maxResolution:162.17554375571817,

        
        source: new ol.source.ImageStatic({
            url: "./layers/2025SatellitenbildSommer_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1533165.464700, 6632565.924100, 1548571.065500, 6645890.841800]
        })
    });
var lyr_2015SatellitenbildSommer_6 = new ol.layer.Image({
        opacity: 1,
        
    title: '2015 Satellitenbild | Sommer<br />' ,
        
maxResolution:162.17554375571817,

        
        source: new ol.source.ImageStatic({
            url: "./layers/2015SatellitenbildSommer_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1533165.464700, 6632565.924100, 1548571.065500, 6645890.841800]
        })
    });
var lyr_VegetationNDVIderletzten5JahreSommer_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ø Vegetation (NDVI) der letzten 5 Jahre | Sommer<br />\
    <img src="styles/legend/VegetationNDVIderletzten5JahreSommer_7_0.png" /> 0,1170<br />\
    <img src="styles/legend/VegetationNDVIderletzten5JahreSommer_7_1.png" /> 0,2796<br />\
    <img src="styles/legend/VegetationNDVIderletzten5JahreSommer_7_2.png" /> 0,4422<br />\
    <img src="styles/legend/VegetationNDVIderletzten5JahreSommer_7_3.png" /> 0,6048<br />\
    <img src="styles/legend/VegetationNDVIderletzten5JahreSommer_7_4.png" /> 0,7673<br />\
    <img src="styles/legend/VegetationNDVIderletzten5JahreSommer_7_5.png" /> 0,9299<br />' ,
        
maxResolution:162.17554375571817,

        
        source: new ol.source.ImageStatic({
            url: "./layers/VegetationNDVIderletzten5JahreSommer_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1533165.464700, 6632565.924100, 1548571.065500, 6645890.841800]
        })
    });
var format_FlchenNDVI06inha5000m_8 = new ol.format.GeoJSON();
var features_FlchenNDVI06inha5000m_8 = format_FlchenNDVI06inha5000m_8.readFeatures(json_FlchenNDVI06inha5000m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlchenNDVI06inha5000m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlchenNDVI06inha5000m_8.addFeatures(features_FlchenNDVI06inha5000m_8);
var lyr_FlchenNDVI06inha5000m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlchenNDVI06inha5000m_8,
maxResolution:14.00223307613098,
 
                style: style_FlchenNDVI06inha5000m_8,
                popuplayertitle: 'Flächen NDVI < 0,6 in ha (> 5000 m²)',
                interactive: true,
    title: 'Flächen NDVI < 0,6 in ha (> 5000 m²)<br />\
    <img src="styles/legend/FlchenNDVI06inha5000m_8_0.png" /> 0,5 - 0,8 ha<br />\
    <img src="styles/legend/FlchenNDVI06inha5000m_8_1.png" /> 0,8 - 1,3 ha<br />\
    <img src="styles/legend/FlchenNDVI06inha5000m_8_2.png" /> 1,3 - 2,0 ha<br />\
    <img src="styles/legend/FlchenNDVI06inha5000m_8_3.png" /> 2,0 - 2,6 ha<br />\
    <img src="styles/legend/FlchenNDVI06inha5000m_8_4.png" /> 2,6 - 4,0 ha<br />\
    <img src="styles/legend/FlchenNDVI06inha5000m_8_5.png" /> > 4 ha<br />' });
var format_groflchigeRodung4ha_9 = new ol.format.GeoJSON();
var features_groflchigeRodung4ha_9 = format_groflchigeRodung4ha_9.readFeatures(json_groflchigeRodung4ha_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_groflchigeRodung4ha_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_groflchigeRodung4ha_9.addFeatures(features_groflchigeRodung4ha_9);
var lyr_groflchigeRodung4ha_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_groflchigeRodung4ha_9,
maxResolution:162.17554375571817,
 minResolution:11.847009361052901,

                style: style_groflchigeRodung4ha_9,
                popuplayertitle: 'großflächige Rodung (> 4 ha)',
                interactive: true,
                title: '<img src="styles/legend/groflchigeRodung4ha_9.png" /> großflächige Rodung (> 4 ha)'
            });
var format_DresdnerHeide_10 = new ol.format.GeoJSON();
var features_DresdnerHeide_10 = format_DresdnerHeide_10.readFeatures(json_DresdnerHeide_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DresdnerHeide_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DresdnerHeide_10.addFeatures(features_DresdnerHeide_10);
var lyr_DresdnerHeide_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DresdnerHeide_10,
				'displayInLayerSwitcher': false,
maxResolution:162.17554375571817,
 
                style: style_DresdnerHeide_10,
                popuplayertitle: 'Dresdner Heide',
                interactive: false,
				
               
				title: undefined
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(false);lyr_Hintergrundbild_2.setVisible(true);lyr_Dresden_3.setVisible(true);lyr_Dresden_4.setVisible(true);lyr_2025SatellitenbildSommer_5.setVisible(true);lyr_2015SatellitenbildSommer_6.setVisible(true);lyr_VegetationNDVIderletzten5JahreSommer_7.setVisible(true);lyr_FlchenNDVI06inha5000m_8.setVisible(true);lyr_groflchigeRodung4ha_9.setVisible(true);lyr_DresdnerHeide_10.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_OpenStreetMap_1,lyr_2025SatellitenbildSommer_5,lyr_2015SatellitenbildSommer_6,lyr_VegetationNDVIderletzten5JahreSommer_7,lyr_FlchenNDVI06inha5000m_8,lyr_groflchigeRodung4ha_9];
lyr_Dresden_3.set('fieldAliases', {'fid': 'fid', 'schluessel': 'schluessel', 'name': 'Stadt', 'flaeche_qkm': 'Fläche in km²', 'einwohner': 'Einwohner', 'flaeche_wald_gesamt': 'Gesamtwaldfläche', 'flaeche_heide': 'Größe der Dresdner Heide', });
lyr_Dresden_4.set('fieldAliases', {'fid': 'fid', 'schluessel': 'schluessel', 'name': 'Stadt', 'flaeche_qkm': 'Fläche in km²', 'einwohner': 'Einwohner', 'flaeche_wald_gesamt': 'Gesamtwaldfläche', 'flaeche_heide': 'Größe der Dresdner Heide', });
lyr_FlchenNDVI06inha5000m_8.set('fieldAliases', {'fid': 'fid', 'wald_referenz_jahr': 'wald_referenz_jahr', 'wald_union_jahre': 'wald_union_jahre', 'flaeche_ha': 'Fläche in ha', });
lyr_groflchigeRodung4ha_9.set('fieldAliases', {'fid': 'fid', 'wald_referenz_jahr': 'wald_referenz_jahr', 'wald_union_jahre': 'wald_union_jahre', 'flaeche_ha': 'Fläche in ha', 'bild': 'Bild', 'quelle': 'Quelle', 'aufnahmedatum': 'Aufnahmedatum', 'gps_koordinaten': 'GPS Koordinaten', });
lyr_DresdnerHeide_10.set('fieldAliases', {'fid': 'fid', 'schluessel': 'schluessel', 'ortsteil': 'Name', 'kreis': 'kreis', 'flaeche_qkm': 'Fläche in km²', });
lyr_Dresden_3.set('fieldImages', {'fid': 'TextEdit', 'schluessel': 'TextEdit', 'name': 'TextEdit', 'flaeche_qkm': 'TextEdit', 'einwohner': 'Range', 'flaeche_wald_gesamt': 'TextEdit', 'flaeche_heide': 'TextEdit', });
lyr_Dresden_4.set('fieldImages', {'fid': 'TextEdit', 'schluessel': 'TextEdit', 'name': 'TextEdit', 'flaeche_qkm': 'TextEdit', 'einwohner': 'Range', 'flaeche_wald_gesamt': 'TextEdit', 'flaeche_heide': 'TextEdit', });
lyr_FlchenNDVI06inha5000m_8.set('fieldImages', {'fid': 'TextEdit', 'wald_referenz_jahr': 'Range', 'wald_union_jahre': 'TextEdit', 'flaeche_ha': 'TextEdit', });
lyr_groflchigeRodung4ha_9.set('fieldImages', {'fid': 'TextEdit', 'wald_referenz_jahr': 'Range', 'wald_union_jahre': 'TextEdit', 'flaeche_ha': 'TextEdit', 'bild': 'TextEdit', 'quelle': 'TextEdit', 'aufnahmedatum': 'DateTime', 'gps_koordinaten': 'TextEdit', });
lyr_DresdnerHeide_10.set('fieldImages', {'fid': 'TextEdit', 'schluessel': 'TextEdit', 'ortsteil': 'TextEdit', 'kreis': 'TextEdit', 'flaeche_qkm': 'TextEdit', });
lyr_Dresden_3.set('fieldLabels', {'fid': 'hidden field', 'schluessel': 'hidden field', 'name': 'hidden field', 'flaeche_qkm': 'header label - visible with data', 'einwohner': 'header label - visible with data', 'flaeche_wald_gesamt': 'header label - visible with data', 'flaeche_heide': 'header label - visible with data', });
lyr_Dresden_4.set('fieldLabels', {'fid': 'hidden field', 'schluessel': 'hidden field', 'name': 'header label - visible with data', 'flaeche_qkm': 'header label - visible with data', 'einwohner': 'header label - visible with data', 'flaeche_wald_gesamt': 'header label - visible with data', 'flaeche_heide': 'header label - visible with data', });
lyr_FlchenNDVI06inha5000m_8.set('fieldLabels', {'fid': 'hidden field', 'wald_referenz_jahr': 'hidden field', 'wald_union_jahre': 'hidden field', 'flaeche_ha': 'header label - visible with data', });
lyr_groflchigeRodung4ha_9.set('fieldLabels', {'fid': 'hidden field', 'wald_referenz_jahr': 'hidden field', 'wald_union_jahre': 'hidden field', 'flaeche_ha': 'header label - visible with data', 'bild': 'header label - visible with data', 'quelle': 'header label - visible with data', 'aufnahmedatum': 'header label - visible with data', 'gps_koordinaten': 'header label - visible with data', });
lyr_DresdnerHeide_10.set('fieldLabels', {'fid': 'hidden field', 'schluessel': 'hidden field', 'ortsteil': 'header label - visible with data', 'kreis': 'header label - always visible', 'flaeche_qkm': 'header label - visible with data', });
lyr_DresdnerHeide_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});