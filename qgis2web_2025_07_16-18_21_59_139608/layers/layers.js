var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1 = new ol.format.GeoJSON();
var features_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1 = format_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1.readFeatures(json_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1.addFeatures(features_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1);
var lyr_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1, 
                style: style_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1,
                popuplayertitle: 'NYS_Civil_Boundaries_5588503181902862245 — Counties.shp',
                interactive: true,
                title: '<img src="styles/legend/NYS_Civil_Boundaries_5588503181902862245Countiesshp_1.png" /> NYS_Civil_Boundaries_5588503181902862245 — Counties.shp'
            });
var format_NY_MHC_2 = new ol.format.GeoJSON();
var features_NY_MHC_2 = format_NY_MHC_2.readFeatures(json_NY_MHC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NY_MHC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NY_MHC_2.addFeatures(features_NY_MHC_2);
var lyr_NY_MHC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NY_MHC_2, 
                style: style_NY_MHC_2,
                popuplayertitle: 'NY_MHC',
                interactive: true,
                title: '<img src="styles/legend/NY_MHC_2.png" /> NY_MHC'
            });
var format_Children_Centers_3 = new ol.format.GeoJSON();
var features_Children_Centers_3 = format_Children_Centers_3.readFeatures(json_Children_Centers_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Children_Centers_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Children_Centers_3.addFeatures(features_Children_Centers_3);
var lyr_Children_Centers_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Children_Centers_3, 
                style: style_Children_Centers_3,
                popuplayertitle: 'Children_Centers',
                interactive: true,
                title: '<img src="styles/legend/Children_Centers_3.png" /> Children_Centers'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1.setVisible(true);lyr_NY_MHC_2.setVisible(true);lyr_Children_Centers_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1,lyr_NY_MHC_2,lyr_Children_Centers_3];
lyr_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1.set('fieldAliases', {'NAME': 'NAME', 'ABBREV': 'ABBREV', 'GNIS_ID': 'GNIS_ID', 'FIPS_CODE': 'FIPS_CODE', 'SWIS': 'SWIS', 'NYSP_ZONE': 'NYSP_ZONE', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', 'POP2020': 'POP2020', 'DOS_LL': 'DOS_LL', 'DOSLL_DATE': 'DOSLL_DATE', 'NYC': 'NYC', 'CALC_SQ_MI': 'CALC_SQ_MI', 'DATEMOD': 'DATEMOD', });
lyr_NY_MHC_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Provider_N': 'Provider_N', 'Program_Na': 'Program_Na', 'Agency_Nam': 'Agency_Nam', 'Website': 'Website', 'Population': 'Population', 'Hours_of_o': 'Hours_of_o', 'Insurances': 'Insurances', 'Young_surv': 'Young_surv', 'Has_negati': 'Has_negati', 'Program_Ph': 'Program_Ph', 'Program_Ad': 'Program_Ad', 'Program__1': 'Program__1', 'Program_Ci': 'Program_Ci', 'Program_St': 'Program_St', 'Program_Zi': 'Program_Zi', 'Program_Co': 'Program_Co', 'Program_Re': 'Program_Re', 'Full_Addre': 'Full_Addre', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Children_Centers_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Provider_N': 'Provider_N', 'Program_Na': 'Program_Na', 'Agency_Nam': 'Agency_Nam', 'Website': 'Website', 'Population': 'Population', 'Hours_of_o': 'Hours_of_o', 'Insurances': 'Insurances', 'Young_surv': 'Young_surv', 'Has_negati': 'Has_negati', 'Program_Ph': 'Program_Ph', 'Program_Ad': 'Program_Ad', 'Program__1': 'Program__1', 'Program_Ci': 'Program_Ci', 'Program_St': 'Program_St', 'Program_Zi': 'Program_Zi', 'Program_Co': 'Program_Co', 'Program_Re': 'Program_Re', 'Full_Addre': 'Full_Addre', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1.set('fieldImages', {'NAME': 'TextEdit', 'ABBREV': 'TextEdit', 'GNIS_ID': 'TextEdit', 'FIPS_CODE': 'TextEdit', 'SWIS': 'TextEdit', 'NYSP_ZONE': 'TextEdit', 'POP1990': 'TextEdit', 'POP2000': 'TextEdit', 'POP2010': 'TextEdit', 'POP2020': 'TextEdit', 'DOS_LL': 'TextEdit', 'DOSLL_DATE': 'DateTime', 'NYC': 'TextEdit', 'CALC_SQ_MI': 'TextEdit', 'DATEMOD': 'DateTime', });
lyr_NY_MHC_2.set('fieldImages', {'OBJECTID': '', 'Provider_N': '', 'Program_Na': '', 'Agency_Nam': '', 'Website': '', 'Population': '', 'Hours_of_o': '', 'Insurances': '', 'Young_surv': '', 'Has_negati': '', 'Program_Ph': '', 'Program_Ad': '', 'Program__1': '', 'Program_Ci': '', 'Program_St': '', 'Program_Zi': '', 'Program_Co': '', 'Program_Re': '', 'Full_Addre': '', 'Location': '', 'Latitude': '', 'Longitude': '', });
lyr_Children_Centers_3.set('fieldImages', {'OBJECTID': '', 'Provider_N': '', 'Program_Na': '', 'Agency_Nam': '', 'Website': '', 'Population': '', 'Hours_of_o': '', 'Insurances': '', 'Young_surv': '', 'Has_negati': '', 'Program_Ph': '', 'Program_Ad': '', 'Program__1': '', 'Program_Ci': '', 'Program_St': '', 'Program_Zi': '', 'Program_Co': '', 'Program_Re': '', 'Full_Addre': '', 'Location': '', 'Latitude': '', 'Longitude': '', });
lyr_NYS_Civil_Boundaries_5588503181902862245Countiesshp_1.set('fieldLabels', {'NAME': 'no label', 'ABBREV': 'no label', 'GNIS_ID': 'no label', 'FIPS_CODE': 'no label', 'SWIS': 'no label', 'NYSP_ZONE': 'no label', 'POP1990': 'no label', 'POP2000': 'no label', 'POP2010': 'no label', 'POP2020': 'no label', 'DOS_LL': 'no label', 'DOSLL_DATE': 'no label', 'NYC': 'no label', 'CALC_SQ_MI': 'no label', 'DATEMOD': 'no label', });
lyr_NY_MHC_2.set('fieldLabels', {'OBJECTID': 'no label', 'Provider_N': 'no label', 'Program_Na': 'no label', 'Agency_Nam': 'no label', 'Website': 'no label', 'Population': 'no label', 'Hours_of_o': 'no label', 'Insurances': 'no label', 'Young_surv': 'no label', 'Has_negati': 'no label', 'Program_Ph': 'no label', 'Program_Ad': 'no label', 'Program__1': 'no label', 'Program_Ci': 'no label', 'Program_St': 'no label', 'Program_Zi': 'no label', 'Program_Co': 'no label', 'Program_Re': 'no label', 'Full_Addre': 'no label', 'Location': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Children_Centers_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Provider_N': 'inline label - always visible', 'Program_Na': 'inline label - always visible', 'Agency_Nam': 'inline label - always visible', 'Website': 'inline label - always visible', 'Population': 'inline label - always visible', 'Hours_of_o': 'inline label - always visible', 'Insurances': 'inline label - always visible', 'Young_surv': 'hidden field', 'Has_negati': 'header label - always visible', 'Program_Ph': 'header label - visible with data', 'Program_Ad': 'inline label - always visible', 'Program__1': 'inline label - visible with data', 'Program_Ci': 'header label - always visible', 'Program_St': 'hidden field', 'Program_Zi': 'inline label - visible with data', 'Program_Co': 'no label', 'Program_Re': 'no label', 'Full_Addre': 'no label', 'Location': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Children_Centers_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});