ol.proj.proj4.register(proj4);
//ol.proj.get("USER:100000").setExtent([60231.565258, 4627787.457594, 439175.692874, 4799263.333101]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_KS120ppm_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'KS=120ppm<br />\
    <img src="styles/legend/KS120ppm_2_0.png" /> -28.2565 -25 cm/km<br />\
    <img src="styles/legend/KS120ppm_2_1.png" /> -25 - -20 cm/km<br />\
    <img src="styles/legend/KS120ppm_2_2.png" /> -20 - -15 cm/km<br />\
    <img src="styles/legend/KS120ppm_2_3.png" /> -15 - -10 cm/km<br />\
    <img src="styles/legend/KS120ppm_2_4.png" /> -10 - -5 cm/km<br />\
    <img src="styles/legend/KS120ppm_2_5.png" /> -5 - 0 cm/km<br />\
    <img src="styles/legend/KS120ppm_2_6.png" /> 0 - 5 cm/km<br />\
    <img src="styles/legend/KS120ppm_2_7.png" /> 5 - 9.1434 cm/km<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KS120ppm_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2227729.658239, 5138688.642794, 2426619.992060, 5353004.256672]
        })
    });
var lyr_KS120ppmAbsValues_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'KS=120ppm (AbsValues)<br />\
    <img src="styles/legend/KS120ppmAbsValues_3_0.png" /> 0 - 5 cm/km<br />\
    <img src="styles/legend/KS120ppmAbsValues_3_1.png" /> 5 - 10 cm/km<br />\
    <img src="styles/legend/KS120ppmAbsValues_3_2.png" /> 10 - 15 cm/km<br />\
    <img src="styles/legend/KS120ppmAbsValues_3_3.png" /> 15 - 20 cm/km<br />\
    <img src="styles/legend/KS120ppmAbsValues_3_4.png" /> 20 - 25 cm/km<br />\
    <img src="styles/legend/KS120ppmAbsValues_3_5.png" /> 25 - 28.2565 cm/km<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KS120ppmAbsValues_3.png",
            attributions: ' ',
            projection: 'USER:100000',
            alwaysInRange: true,
            imageExtent: [169777.289300, 4636096.513360, 314852.689300, 4793178.153360]
        })
    });

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_KS120ppm_2.setVisible(true);lyr_KS120ppmAbsValues_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_KS120ppm_2,lyr_KS120ppmAbsValues_3];
