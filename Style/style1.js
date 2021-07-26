import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
      
    //App
    appContainer:{
        width: 490,
    },
    
    //Header
    header:{
        alignItems:'center',
        backgroundColor:'#d96c06',
        flexDirection:'row',
        height:80, 
        padding:5,  
        width:490,
        
    },

    textheader:{
        fontSize:18,
        fontWeight:'bold',
        fontStyle:'italic',
        
    },

    textheader1:{
        justifyContent:"center",
        marginLeft:5,
     
     },

    imgheader:{
        height: 40,
        width:40,
        padding:25,
        marginLeft:5,
    },

    // Content
    content:{
        backgroundColor:'#2292a4',
        alignContent:'center',
    },

    content1:{
        alignItems:'center',
        backgroundColor:'#f5efed',
        justifyContent:'center',
        marginLeft:20,
        width:370,
    },

    textContent:{
        fontSize:18,
        fontWeight:'bold',
        marginTop: 30,
        textAlign:'center',
    },

    imgContent:{
            height:180,
            width:370,
           
    },


    imgContent1:{
        height:250,
        marginTop:20,
        width: 370,
    },

    textContent1:{
        fontSize:18,
        fontWeight:'bold',
        marginTop: 40,
        textAlign:'center',
    },

    imgContent3:{
        height:250,
        marginTop:50,
        width: 370,
    },

    imgContent2:{
        height:250,
        marginTop: 30,
        width:370,

    },



    // Informações

    informacao:{
        justifyContent:'center',
        marginLeft:20,
        marginRight:20,
    },

    boasVindas:{
        fontSize:16,
        fontWeight:"bold",
        marginTop:50,
    },

    info:{ 
        fontSize:15,
        fontStyle:'normal',
        fontWeight:'bold',
    },

    info1:{ 
        fontSize:15,
        fontStyle:'normal',
    },

    infoImc:{
        fontSize:15,
        fontStyle:'italic',
        
    },

   // Imc
   imcContent2:{
    alignItems:'center',
    borderBottomWidth:1,
    justifyContent:'center',
    width:370,
},

linha1:{
    alignItems:'center',
    flexDirection:'row',
    borderStyle:'solid',
},

imcLinha:{
    borderRadius:5,
    borderWidth:1,
    borderStyle:'solid',
    margin:20,
    width:140,
    
},

touchImc:{
    borderWidth:1,
    borderRadius:5,
    marginBottom:20,
    width:100,
    shadowRadius:3,

},

touchText:{
    textAlign:'center',
},




//Footer
footer:{
    alignItems:"center",
    backgroundColor:'#D96c06',
    flexDirection:'row',
    justifyContent:'center',
    height:50,
    width:490,
    
},

footer2:{
    alignItems:'center',
    height:50,
    marginRight:80,
    width:370,
},

textFooter:{
    textAlign:'center',
    marginTop:18
},







})