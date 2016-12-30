package com.simpleserver;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import utils.NanoHTTPD;

public class SimpleServer extends NanoHTTPD{
	
	File currentDir = new File(".");
	File parentDir = currentDir.getParentFile();
	
	
	String basePath = "res/";

	public SimpleServer(int port) throws IOException {
		super(port);
	}


	@Override
	public Response serve(String uri, String method, Properties header, Properties parms) {

		String extension = "";
		int index = uri.lastIndexOf('.');
		if (index > 0) {
			extension = uri.substring(index+1);
		}
		
		String contentType = "text/plain";
		
		if (extension.equalsIgnoreCase("html")) {
			contentType = "text/html";
		} else if(extension.equalsIgnoreCase("js")){
			contentType = "application/javascript";
		} else if(extension.equalsIgnoreCase("png")){
			contentType = "image/png";
			return new Response(HTTP_OK, contentType, getNonTextFile(uri));
		} else if(extension.equalsIgnoreCase("json")){
			contentType = "application/json";
		} else if(extension.equalsIgnoreCase("css")){
			contentType = "text/css";
		} else if(extension.equalsIgnoreCase("jpg")){
			contentType = "image/jpeg";
			return new Response(HTTP_OK, contentType, getNonTextFile(uri));
		}
		
		Response response = new Response(HTTP_OK, contentType, getFile(uri));
		return response;
	}

	public void startServer(){
		//System.out.println("Server run at port : "+port);
	}
	
	public FileInputStream getNonTextFile(String uri){
		 FileInputStream fis = null;
		 
	     try {
	        File file = new File(basePath+uri); //path exists and its correct
	        
	        fis = new FileInputStream(file);
	        
	     } catch (FileNotFoundException e) {
	         e.printStackTrace();
	     }
	     return fis;
	}

	public String getFile(String uri){
		//String relativePath = basePath;
		//System.out.println(relativePath);
		
		File file = new File(basePath+uri);

		FileInputStream fis = null;
		String dataString = null;
		try {
			fis = new FileInputStream(file);
			int content;
			while ((content = fis.read()) != -1) {
				if(dataString == null){
					dataString = String.valueOf((char)content);
				} else {
					dataString = dataString + (char)content;
				}
			}try {
				if (fis != null)
					fis.close();
			} catch (IOException ex) {
				ex.printStackTrace();
			}

		} catch (IOException e) {
			e.printStackTrace();
		}

		return dataString;
	}

}
