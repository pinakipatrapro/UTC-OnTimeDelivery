this.serviceMetadata =  {
    "Key":{
       "PropertyRef":{
          "_Name":"ID"
       }
    },
    "Property":[
       {
          "_Name":"ID",
          "_Type":"Edm.String",
          "_Nullable":"false"
       },
       {
          "_Name":"TotaledProperties",
          "_Type":"Edm.String",
          "_sap:aggregation-role":"totaled-properties-list"
       },
       {
          "_Name":"A0CALMONTH_T",
          "_Type":"Edm.String",
          "_sap:aggregation-role":"dimension",
          "_sap:text":"A0CALMONTH_T",
          "_sap:label":"Calendar Year/Month",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A0CALYEAR",
          "_Type":"Edm.String",
          "_MaxLength":"4",
          "_sap:aggregation-role":"dimension",
          "_sap:label":"Calendar Year"
       },
       {
          "_Name":"A0ID_XCPD",
          "_Type":"Edm.String",
          "_MaxLength":"1",
          "_sap:aggregation-role":"dimension",
          "_sap:label":"Plant"
       },
       {
          "_Name":"ZBLK_IND_T",
          "_Type":"Edm.String",
          "_MaxLength":"20",
          "_sap:aggregation-role":"dimension",
          "_sap:text":"ZBLK_IND_T",
          "_sap:label":"One-Time Account",
          "_sap:filterable":"false"
       },
       {
          "_Name":"ZBRD_GRP_T",
          "_Type":"Edm.String",
          "_MaxLength":"40",
          "_sap:aggregation-role":"dimension",
          "_sap:text":"ZBRD_GRP_T",
          "_sap:label":"Customer Node (Type C)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"ZCUSH_TYC_T",
          "_Type":"Edm.String",
          "_sap:aggregation-role":"dimension",
          "_sap:text":"ZCUSH_TYC_T",
          "_sap:label":"Product family Group",
          "_sap:filterable":"false"
       },
       {
          "_Name":"ZDBLK_IND_T",
          "_Type":"Edm.String",
          "_MaxLength":"20",
          "_sap:aggregation-role":"dimension",
          "_sap:text":"ZDBLK_IND_T",
          "_sap:label":"Brand (MatGrp2)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"ZFI_BRAND_T",
          "_Type":"Edm.String",
          "_MaxLength":"40",
          "_sap:aggregation-role":"dimension",
          "_sap:text":"ZFI_BRAND_T",
          "_sap:label":"Level 1 Brand Group",
          "_sap:filterable":"false"
       },
       {
          "_Name":"ZPHL3_GRP_T",
          "_Type":"Edm.String",
          "_MaxLength":"40",
          "_sap:aggregation-role":"dimension",
          "_sap:text":"ZPHL3_GRP_T",
          "_sap:label":"Product Type",
          "_sap:filterable":"false"
       },
       {
          "_Name":"ZPLANT_T",
          "_Type":"Edm.String",
          "_MaxLength":"40",
          "_sap:aggregation-role":"dimension",
          "_sap:text":"ZPLANT_T",
          "_sap:label":"Del History Blck Ind",
          "_sap:filterable":"false"
       },
       {
          "_Name":"ZPLANT_TR_T",
          "_Type":"Edm.String",
          "_MaxLength":"40",
          "_sap:aggregation-role":"dimension",
          "_sap:text":"ZPLANT_TR_T",
          "_sap:label":"Order History Block",
          "_sap:filterable":"false"
       },
       {
          "_Name":"ZPROD_TY_T",
          "_Type":"Edm.String",
          "_MaxLength":"20",
          "_sap:aggregation-role":"dimension",
          "_sap:text":"ZPROD_TY_T",
          "_sap:label":"Manufacturing Plant",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9PPP4",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9PPP4_F",
          "_sap:label":"Delivered Qty",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9PPP4_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Delivered Qty (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9PW0O",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9PW0O_F",
          "_sap:label":"Delivered Value",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9PW0O_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Delivered Value (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9Q2C8",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9Q2C8_F",
          "_sap:label":"Qty Delivered on Time",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9Q2C8_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Qty Delivered on Time (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9Q8NS",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9Q8NS_F",
          "_sap:label":"Qty Delivered Late",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9Q8NS_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Qty Delivered Late (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9QEZC",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9QEZC_F",
          "_sap:label":"On time Delivery %(Qty)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9QEZC_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"On time Delivery %(Qty) (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9QLAW",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9QLAW_F",
          "_sap:label":"Late Delivery %(Qty)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9QLAW_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Late Delivery %(Qty) (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9QRMG",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9QRMG_F",
          "_sap:label":"Late Delivery %(Value)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9QRMG_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Late Delivery %(Value) (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9R49K",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9R49K_F",
          "_sap:label":"On time Delivery %(Value)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9R49K_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"On time Delivery %(Value) (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9RAL4",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9RAL4_F",
          "_sap:label":"Value Delivered on Time",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9RAL4_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Value Delivered on Time (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9QXY0",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9QXY0_F",
          "_sap:label":"Value Delivered Late",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9QXY0_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Value Delivered Late (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9RGWO",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9RGWO_F",
          "_sap:label":"No. of Delivery delivered on Time",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9RGWO_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"No. of Delivery delivered on Time (Form",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9RN88",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9RN88_F",
          "_sap:label":"No. of Delivery Delivered Late",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9RN88_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"No. of Delivery Delivered Late (Formatt",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9RTJS",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9RTJS_F",
          "_sap:label":"WC cycle Calc(Dummy)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9RTJS_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"WC cycle Calc(Dummy) (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9RZVC",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9RZVC_F",
          "_sap:label":"DC Cyle Time",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9RZVC_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"DC Cyle Time (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9S66W",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9S66W_F",
          "_sap:label":"Qty Filled on Time",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9S66W_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Qty Filled on Time (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9SCIG",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9SCIG_F",
          "_sap:label":"Qty Filled Late",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9SCIG_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Qty Filled Late (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9SIU0",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9SIU0_F",
          "_sap:label":"Fill Rate %(Qty)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9SIU0_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Fill Rate %(Qty) (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9SP5K",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9SP5K_F",
          "_sap:label":"Value Filled on Time",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9SP5K_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Value Filled on Time (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9SVH4",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9SVH4_F",
          "_sap:label":"Value Filled Late",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9SVH4_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Value Filled Late (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9T1SO",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9T1SO_F",
          "_sap:label":"Open Delivery Qty(Late)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9T1SO_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Open Delivery Qty(Late) (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9T848",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9T848_F",
          "_sap:label":"Open Delivery Qty(Pending)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9T848_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Open Delivery Qty(Pending) (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9TEFS",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9TEFS_F",
          "_sap:label":"Qty in Progress",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9TEFS_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Qty in Progress (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9TKRC",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9TKRC_F",
          "_sap:label":"Open Delivery Value(Late)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9TKRC_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Open Delivery Value(Late) (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9TR2W",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9TR2W_F",
          "_sap:label":"Open Delivery Value(Pending)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9TR2W_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Open Delivery Value(Pending) (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9TXEG",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9TXEG_F",
          "_sap:label":"DC (Performance) on Time",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9TXEG_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"DC (Performance) on Time (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9U3Q0",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9U3Q0_F",
          "_sap:label":"DC performance %",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9U3Q0_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"DC performance % (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9UA1K",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9UA1K_F",
          "_sap:label":"DC Performance(Late)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9UA1K_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"DC Performance(Late) (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9UGD4",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9UGD4_F",
          "_sap:label":"Delivered Qty - Plant Filter",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9UGD4_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Delivered Qty - Plant Filter (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9UMOO",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9UMOO_F",
          "_sap:label":"Qty Delivered on Time - Plant Filter",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9UMOO_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Qty Delivered on Time - Plant Filter (Fo",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9UT08",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9UT08_F",
          "_sap:label":"On time Delivery %(Qty)-Plant Filter",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9UT08_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"On time Delivery %(Qty)-Plant Filter (Fo",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9UZBS",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9UZBS_F",
          "_sap:label":"Qty Filled on Time - Plant Filter",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9UZBS_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Qty Filled on Time - Plant Filter (Forma",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9V5NC",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9V5NC_F",
          "_sap:label":"Qty Filled Late - Plant Filter",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9V5NC_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Qty Filled Late - Plant Filter (Formatte",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9VBYW",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9VBYW_F",
          "_sap:label":"Fill Rate %(Qty) - Plant Filter",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9VBYW_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Fill Rate %(Qty) - Plant Filter (Formatt",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9VIAG",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9VIAG_F",
          "_sap:label":"Target %",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9VIAG_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Target % (Formatted)",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9VOM0",
          "_Type":"Edm.Decimal",
          "_Precision":"36",
          "_Scale":"14",
          "_sap:aggregation-role":"measure",
          "_sap:text":"A006NZKS3HHO063BV63UA9VOM0_F",
          "_sap:label":"Target DC cycle",
          "_sap:filterable":"false"
       },
       {
          "_Name":"A006NZKS3HHO063BV63UA9VOM0_F",
          "_Type":"Edm.String",
          "_MaxLength":"60",
          "_sap:label":"Target DC cycle (Formatted)",
          "_sap:filterable":"false"
       }
    ],
    "_Name":"ZSDL_CP02_Q003_VAResult",
    "_sap:semantics":"aggregate",
    "_sap:content-version":"1"
 }


 
module.exports.metadata = this.serviceMetadata;