ol.proj.proj4.register(proj4);
//ol.proj.get("USER:100000").setExtent([59239.223877, 4632156.942957, 424890.194392, 4797617.536564]);
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
var lyr_KSKR01_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'KS-KR01<br />\
    <img src="styles/legend/KSKR01_2_0.png" /> -50.25 - -50 cm/km<br />\
    <img src="styles/legend/KSKR01_2_1.png" /> -50 - -40  cm/km<br />\
    <img src="styles/legend/KSKR01_2_2.png" /> -40 - -30  cm/km<br />\
    <img src="styles/legend/KSKR01_2_3.png" /> -30 - -25  cm/km<br />\
    <img src="styles/legend/KSKR01_2_4.png" /> -25 - -20  cm/km<br />\
    <img src="styles/legend/KSKR01_2_5.png" /> -20 - -15  cm/km<br />\
    <img src="styles/legend/KSKR01_2_6.png" /> -15 - -12.86 cm/km<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KSKR01_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2227729.658178, 5138688.624266, 2426620.009493, 5353004.256734]
        })
    });
var lyr_KSKR01120ppm_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'KS-KR01=>120ppm<br />\
    <img src="styles/legend/KSKR01120ppm_3_0.png" /> -28.26 -25 cm/km<br />\
    <img src="styles/legend/KSKR01120ppm_3_1.png" /> -25 - -20 cm/km<br />\
    <img src="styles/legend/KSKR01120ppm_3_2.png" /> -20 - -15 cm/km<br />\
    <img src="styles/legend/KSKR01120ppm_3_3.png" /> -15 - -10 cm/km<br />\
    <img src="styles/legend/KSKR01120ppm_3_4.png" /> -10 - -5 cm/km<br />\
    <img src="styles/legend/KSKR01120ppm_3_5.png" /> -5 - 0 cm/km<br />\
    <img src="styles/legend/KSKR01120ppm_3_6.png" /> 0 - 5 cm/km<br />\
    <img src="styles/legend/KSKR01120ppm_3_7.png" /> 5 - 9.14 cm/km<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KSKR01120ppm_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2227729.658239, 5138688.642794, 2426619.992060, 5353004.256672]
        })
    });
var lyr_KSKR01120ppmAbsValues_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'KS-KR01=>120ppm (AbsValues)<br />\
    <img src="styles/legend/KSKR01120ppmAbsValues_4_0.png" /> 0 - 5 cm/km<br />\
    <img src="styles/legend/KSKR01120ppmAbsValues_4_1.png" /> 5 - 10 cm/km<br />\
    <img src="styles/legend/KSKR01120ppmAbsValues_4_2.png" /> 10 - 15 cm/km<br />\
    <img src="styles/legend/KSKR01120ppmAbsValues_4_3.png" /> 15 - 20 cm/km<br />\
    <img src="styles/legend/KSKR01120ppmAbsValues_4_4.png" /> 20 - 25 cm/km<br />\
    <img src="styles/legend/KSKR01120ppmAbsValues_4_5.png" /> 25 - 28.26 cm/km<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KSKR01120ppmAbsValues_4.png",
            attributions: ' ',
            projection: 'USER:100000',
            alwaysInRange: true,
            imageExtent: [169777.289300, 4636096.513360, 314852.689300, 4793178.153360]
        })
    });

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_KSKR01_2.setVisible(true);lyr_KSKR01120ppm_3.setVisible(true);lyr_KSKR01120ppmAbsValues_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_KSKR01_2,lyr_KSKR01120ppm_3,lyr_KSKR01120ppmAbsValues_4];
