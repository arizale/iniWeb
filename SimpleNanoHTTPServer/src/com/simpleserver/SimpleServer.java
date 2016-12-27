package com.simpleserver;

import java.io.IOException;
import java.util.Properties;

import utils.NanoHTTPD;

public class SimpleServer extends NanoHTTPD{
	
	int port = 8080;

	public SimpleServer(int port) throws IOException {
		super(port);
		this.port = port;
	}
	
	@Override
	public Response serve(String uri, String method, Properties header, Properties parms) {
		Response response = new Response(HTTP_OK, "text/plain", "Hello World!");
		return response;
	}
	
	public void startServer(){
		System.out.println("Server run at port : "+port);
	}

}
