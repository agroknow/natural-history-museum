
//JSONP version
//we get a json array and manipulate it.
function getItemJSONP(urlTemp, selectedLanguage)
{
    //alert(urlTemp);
    jQuery.ajax({
        url: urlTemp,
        dataType: "jsonp",
        success: function(data)
        {
        
        //parse array and create an JS Object Array
        //every item is a JSON
        
        var arrayWithJSONS = JSON.parse(data);
		console.log(arrayWithJSONS , selectedLanguage);
       
//-------------
        if(arrayWithJSONS[0].languageBlocks.length!==undefined && arrayWithJSONS[0].languageBlocks!==undefined )
        {

		        //var language = Object.keys(arrayWithJSONS[0].languageBlocks[i]); 
		        //keys for different language versions of this item. (i.e en, gr, no,)
		        
		        languageBlock = arrayWithJSONS[0].languageBlocks[i][selectedLanguage]; // We always get language[0] as key
		        
		        //jQuery('#stage').append('<p> languageBlocks.title: ' + language[0] + '</p>'); // language code
		        //document.getElementById('itemTitle').innerHTML = languageBlock.title ;
		        //document.getElementById('itemDescription').innerHTML = languageBlock.description;
		        if(languageBlock.title!==undefined)
		        {
		        document.getElementById('itemTitle').innerHTML = languageBlock.title ;
		        }
		        if(languageBlock.description!==undefined)
		        {
		        document.getElementById('itemDescription').innerHTML = languageBlock.description;
		        }
		        
		        
		        //IF PATHWAY USE THIS ICON ELSE CHOOSE BY TYPE
		        if(arrayWithJSONS[0].tokenBlock.learningResourceTypes.length!==undefined)
		        {
	                for(var j=0; j<arrayWithJSONS[0].tokenBlock.learningResourceTypes.length;j++)//*ARRAY of keywords in current version
	                {
		                if(arrayWithJSONS[0].tokenBlock.learningResourceTypes[j]=="pathway")
		                {
			                jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="images/pathway.jpg" /> </a>');
		                }
	                }
                }
                else if(arrayWithJSONS[0].expressions[0]!=undefined)
                {
	                if(arrayWithJSONS[0].expressions[0].manifestations!=undefined && arrayWithJSONS[0].expressions[0].manifestations[0]!=undefined)
			        {
			            if(arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url!==undefined)
				        {
					        jQuery('#itemAccess').append('<a target="_blank" href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'" class="access  secondary" data_translation="access_to_the_resource">Access to the resource</a>');
				        
				       
				        if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter!==undefined)
					        {
					        if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter=='text/html'){
					        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="http://open.thumbshots.org/image.aspx?url='+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'" /> </a>');
					        
					        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter=='text/xml'){
					        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/xml.png" /> </a>');
					        
					        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("/pdf")>=0){
					        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/pdf.png" /> </a>');
					        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("excel")>=0){
					        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/x-applix-spreadsheet.png" /> </a>');
					        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("word")>=0){
					        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/word.png" /> </a>');
					        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("ppt")>=0){
					        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/ppt.png" /> </a>');
					        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("application")>=0){
					        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/application.png" /> </a>');
					        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("audio")>=0){
					        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/audio.png" /> </a>');
					        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("video")>=0){
					        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/video.png" /> </a>');
					        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("image")>=0){
					        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'" /> </a>');
					        
					        
					        }else{
					        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="http://open.thumbshots.org/image.aspx?url='+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'" /> </a>');
					        
					        }
					        
				        }else{
				        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="http://open.thumbshots.org/image.aspx?url='+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'" /> </a>');
				        
				        }
				        }
			        
			        if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter!==undefined)
			        {
			        jQuery('#itemMediaFormat').append('<span class="forKomma last">'+arrayWithJSONS[0].expressions[0].manifestations[0].parameter+'</span>');
			        
			        }
			        }
                }
		        
		        
		        
		        
		        
		        
		        if(arrayWithJSONS[0].tokenBlock.ageRange!==undefined){
		        jQuery('#ageRange').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.ageRange+'</span>');
		        jQuery('#itemAgeRange').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.ageRange+'</span>');
		        }
		        if(arrayWithJSONS[0].rights.url!==undefined){
		        if(arrayWithJSONS[0].rights.url.search("licenses/by-nc-sa")>=0){
		        jQuery('#itemRights').append('<span style="position:relative;top:-10px;">Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nc-sa.png"></a></nav>');
		        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-nc-nd")>=0){
		        jQuery('#itemRights').append('<span style="position:relative;top:-10px;">Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nc-nd.png"></a></nav>');
		        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-nd")>=0){
		        jQuery('#itemRights').append('<span style="position:relative;top:-10px;">Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nd.png"></a></nav>');
		        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-sa")>=0){
		        jQuery('#itemRights').append('<span style="position:relative;top:-10px;">Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-sa.png"></a></nav>');
		        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-nc")>=0){
		        jQuery('#itemRights').append('<span style="position:relative;top:-10px;">Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nc.png"></a></nav>');
		        }else if(arrayWithJSONS[0].rights.url.search("licenses/by")>=0){
		        jQuery('#itemRights').append('<span style="position:relative;top:-10px;">Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by.png"></a></nav>');
		        
		        }else{
		        jQuery('#itemRights').append('<span>Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank">'+arrayWithJSONS[0].rights.url+'</a></nav>');
		        }
		        
		        }else if(arrayWithJSONS[0].rights.description!==undefined ){
		        if(arrayWithJSONS[0].rights.description['en']!==undefined ){
		        jQuery('#itemRights').append('<span>Rights: </span><nav  class="itemRights">'+arrayWithJSONS[0].rights.description['en']+'</nav>');
		        }
		        }
		
		        if(arrayWithJSONS[0].expressions[0].language!==undefined)
		        {
		        jQuery('#itemLanguage').append('<span class="flag '+arrayWithJSONS[0].expressions[0].language+'flag">'+arrayWithJSONS[0].expressions[0].language+'</span>');
		        
		        }
		        
		        
		        if(arrayWithJSONS[0].tokenBlock.endUserRoles.length!==undefined)
		        {
                	for(var j=0; j<arrayWithJSONS[0].tokenBlock.endUserRoles.length;j++)//*ARRAY of keywords in current version
	                {
		                if(j==arrayWithJSONS[0].tokenBlock.endUserRoles.length-1){
		                jQuery('#itemIntendedAudience').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.endUserRoles[j]+'<span>');
		                
		                }
		                else{
		                jQuery('#itemIntendedAudience').append('<span class="forKomma">'+arrayWithJSONS[0].tokenBlock.endUserRoles[j]+'<span>');
		                
		                }
	                }
                }
		        
		        if(arrayWithJSONS[0].tokenBlock.learningResourceTypes.length!==undefined)
		        {
	                for(var j=0; j<arrayWithJSONS[0].tokenBlock.learningResourceTypes.length;j++)//*ARRAY of keywords in current version
	                {
		                if(j==arrayWithJSONS[0].tokenBlock.learningResourceTypes.length-1)
		                {
		                	jQuery('#itemResourceType').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.learningResourceTypes[j]+'<span>');
		                
		                }
		                else
		                {
		                	jQuery('#itemResourceType').append('<span class="forKomma">'+arrayWithJSONS[0].tokenBlock.learningResourceTypes[j]+'<span>');
		                
		                }
	                }
                }
		        
		        if(arrayWithJSONS[0].tokenBlock.contexts.length!==undefined)
		        {
		        for(var j=0; j<arrayWithJSONS[0].tokenBlock.contexts.length;j++)//*ARRAY of keywords in current version
		        {
		        if(j==arrayWithJSONS[0].tokenBlock.contexts.length-1){
		        jQuery('#itemEducationalContext').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.contexts[j]+'<span>');
		        
		        }else{
		        jQuery('#itemEducationalContext').append('<span class="forKomma">'+arrayWithJSONS[0].tokenBlock.contexts[j]+'<span>');
		        
		        }
		        
		        }
		        }
		        
		        
		        if(languageBlock.keywords.length!==undefined)
		        {
		        //                jQuery('#keywords').append('<div><ul class="itemKeywords"><li><span>Keywords:</span><nav id="itemKeywords" class="inline-nav clearfix"> <!--auto-generated--></nav></li></ul></div>');
		        
		        for(var j=0; j<languageBlock.keywords.length;j++)//*ARRAY of keywords in current version
		        {
		        if(j==languageBlock.keywords.length-1){
		        jQuery('#itemKeywords').append('<a  href="listing.html?query='+languageBlock.keywords[j]+'" class="forKomma link last">'+languageBlock.keywords[j]+'</a>');
		        
		        }else{
		        jQuery('#itemKeywords').append('<a  href="listing.html?query='+languageBlock.keywords[j]+'" class="forKomma link">'+languageBlock.keywords[j]+'</a>');
		        
		        }
		        
		        }
		        }
		        
		        
        }
        
        
		/*QUALITY VALIDATOR */
        if(arrayWithJSONS[0].contributors != undefined)
        {
	        if(arrayWithJSONS[0].contributors.length!=undefined)
	        {
		        for(var i=0; i<arrayWithJSONS[0].contributors.length;i++)
		        {
		        	
			        if(arrayWithJSONS[0].contributors[i].role=='educational validator')
			        {
			            document.getElementById('approved').style.visibility="visible";
				        jQuery('#validator').append(arrayWithJSONS[0].contributors[i].organization)
			        }
		        }
	        }
        }
        
        
        
//--//if languageBlocks has ONLY one value => not array
        if(arrayWithJSONS[0].languageBlocks.length==undefined && arrayWithJSONS[0].languageBlocks!==undefined )
        {
	        /* var language = Object.keys(arrayWithJSONS[0].languageBlocks); */ 
	        //keys for different language versions of this item. (i.e en, gr, no,)
	        
	        
	        languageBlock = arrayWithJSONS[0].languageBlocks[selectedLanguage];
	        
	        if(languageBlock != undefined)
	        {
		        if(languageBlock.title!==undefined)
		        {
			        document.getElementById('itemTitle').innerHTML = languageBlock.title ;
		        }
		        
		        if(languageBlock.description!==undefined)
		        {
		        	document.getElementById('itemDescription').innerHTML = languageBlock.description;
		        }

				if(languageBlock.keywords!=undefined && languageBlock.keywords.length!==undefined)
		        {
		            for(var j=0; j<languageBlock.keywords.length;j++)//*ARRAY of keywords in current version
		            {
		                if(j==languageBlock.keywords.length-1)
		                {
			                jQuery('#itemKeywords').append('<a  href="listing.html?query='+languageBlock.keywords[j]+'" class="forKomma link last">'+languageBlock.keywords[j]+'</a>');
		                
		                }
		                else
		                {
			                jQuery('#itemKeywords').append('<a  href="listing.html?query='+languageBlock.keywords[j]+'" class="forKomma link">'+languageBlock.keywords[j]+'</a>');
		                }	                }
		        }

	        }
	        	        
	       
   		//IF PATHWAY USE THIS ICON ELSE CHOOSE BY TYPE
        if(arrayWithJSONS[0].tokenBlock.learningResourceTypes.length!==undefined)
        {
            for(var j=0; j<arrayWithJSONS[0].tokenBlock.learningResourceTypes.length;j++)//*ARRAY of keywords in current version
            {
                if(arrayWithJSONS[0].tokenBlock.learningResourceTypes[j]=="pathway")
                {
	                jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="images/pathway.jpg" /> </a>');
                }
            }
        }
        else if(arrayWithJSONS[0].expressions[0]!=undefined)
        {
	        if(arrayWithJSONS[0].expressions[0].manifestations!=undefined && arrayWithJSONS[0].expressions[0].manifestations[0]!=undefined)
	        {
                	
	                if(arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url!==undefined)
	                {
	                jQuery('#itemAccess').append('<a target="_blank" href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'" class="access  secondary" data_translation="access_to_the_resource">Access to the resource</a>');
	                if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter!==undefined)
	                {
		                if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter=='text/html'){
		                jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="http://open.thumbshots.org/image.aspx?url='+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'" /> </a>');
		                
		                }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter=='text/xml'){
		                jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/xml.png" /> </a>');
		                
		                }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("/pdf")>=0){
		                jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/pdf.png" /> </a>');
		                }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("excel")>=0){
		                jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/x-applix-spreadsheet.png" /> </a>');
		                }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("word")>=0){
		                jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/word.png" /> </a>');
		                }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("ppt")>=0){
		                jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/ppt.png" /> </a>');
		                }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("application")>=0){
		                jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/application.png" /> </a>');
		                }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("audio")>=0){
		                jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/audio.png" /> </a>');
		                }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("video")>=0){
		                jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/video.png" /> </a>');
		                }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("image")>=0){
		                jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'" /> </a>');
		                
		                
		                }else{
		                jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="http://open.thumbshots.org/image.aspx?url='+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'" /> </a>');
		                
		                }
		                
	                }else{
	                jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="http://open.thumbshots.org/image.aspx?url='+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'" /> </a>');
	                
	                }
	                }
	                if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter!==undefined)
	                {
	                jQuery('#itemMediaFormat').append('<span class="forKomma last">'+arrayWithJSONS[0].expressions[0].manifestations[0].parameter+'</span>');
	                
	                }    
                }
	           
	        if(arrayWithJSONS[0].expressions[0].language!==undefined)
	        {
                	jQuery('#itemLanguage').append('<span class="flag '+arrayWithJSONS[0].expressions[0].language+'flag">'+arrayWithJSONS[0].expressions[0].language+'</span>');
                }   
	       } 
	
	       
	       /* TOKEN BLOCK */
	       if(arrayWithJSONS[0].tokenBlock!=undefined){
	        if(arrayWithJSONS[0].tokenBlock.ageRange!==undefined){
	            jQuery('#ageRange').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.ageRange+'</span>');
	            jQuery('#itemAgeRange').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.ageRange+'</span>');
	        }  
	        
	        /* end user role */
	        if(arrayWithJSONS[0].tokenBlock.endUserRoles!=undefined && arrayWithJSONS[0].tokenBlock.endUserRoles.length!=undefined)
	            {
	            for(var j=0; j<arrayWithJSONS[0].tokenBlock.endUserRoles.length;j++)//*ARRAY of keywords in current version
	            {
	            	if(j==arrayWithJSONS[0].tokenBlock.endUserRoles.length-1)
	                {
	                	jQuery('#itemIntendedAudience').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.endUserRoles[j]+'<span>');
	                }
					else
	                {
		                jQuery('#itemIntendedAudience').append('<span class="forKomma">'+arrayWithJSONS[0].tokenBlock.endUserRoles[j]+'<span>');
	                }
	            }
	            }
	        /* learningResourceTypes */
	        if(arrayWithJSONS[0].tokenBlock.learningResourceTypes!=undefined && arrayWithJSONS[0].tokenBlock.learningResourceTypes.length!==undefined)
	            {
	            for(var j=0; j<arrayWithJSONS[0].tokenBlock.learningResourceTypes.length;j++)//*ARRAY of keywords in current version
	            {
	            if(j==arrayWithJSONS[0].tokenBlock.learningResourceTypes.length-1){
	            jQuery('#itemResourceType').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.learningResourceTypes[j]+'<span>');
	            
	            }else{
	            jQuery('#itemResourceType').append('<span class="forKomma">'+arrayWithJSONS[0].tokenBlock.learningResourceTypes[j]+'<span>');
	            
	            }
	            
	            }
	            }
	         /* contexts */
	        if(arrayWithJSONS[0].tokenBlock.contexts!=undefined && arrayWithJSONS[0].tokenBlock.contexts.length!==undefined)
	            {
	            for(var j=0; j<arrayWithJSONS[0].tokenBlock.contexts.length;j++)//*ARRAY of keywords in current version
	            {
	            if(j==arrayWithJSONS[0].tokenBlock.contexts.length-1){
	            jQuery('#itemEducationalContext').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.contexts[j]+'<span>');
	            
	            }else{
	            jQuery('#itemEducationalContext').append('<span class="forKomma">'+arrayWithJSONS[0].tokenBlock.contexts[j]+'<span>');
	            
	            }
	            
	            }
	            }
	        
	       }
	       
	        if(arrayWithJSONS[0].rights.url!==undefined){
	        if(arrayWithJSONS[0].rights.url.search("licenses/by-nc-sa")>=0){
	        jQuery('#itemRights').append('<span style="position:relative;top:-10px;">Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nc-sa.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-nc-nd")>=0){
	        jQuery('#itemRights').append('<span style="position:relative;top:-10px;">Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nc-nd.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-nd")>=0){
	        jQuery('#itemRights').append('<span style="position:relative;top:-10px;">Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nd.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-sa")>=0){
	        jQuery('#itemRights').append('<span style="position:relative;top:-10px;">Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-sa.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-nc")>=0){
	        jQuery('#itemRights').append('<span style="position:relative;top:-10px;">Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nc.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by")>=0){
	        jQuery('#itemRights').append('<span style="position:relative;top:-10px;">Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by.png"></a></nav>');
	        
	        }else{
	        jQuery('#itemRights').append('<span>Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank">'+arrayWithJSONS[0].rights.url+'</a></nav>');
	        }
	        
	        }else if(arrayWithJSONS[0].rights.description!==undefined ){
	        if(arrayWithJSONS[0].rights.description['en']!==undefined ){
	        jQuery('#itemRights').append('<span>Rights: </span><nav  class="itemRights">'+arrayWithJSONS[0].rights.description['en']+'</nav>');
	        }
	        }
	   
        }
        
//-------------
        
        
        
        
        
        
        //end of -success- of getItemJSONP
        }})}





