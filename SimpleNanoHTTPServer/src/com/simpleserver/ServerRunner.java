package com.simpleserver;

import java.io.File;
import java.io.IOException;

public class ServerRunner {

	public static void main(String[] args){
		try {
			int port = 8090;
			SimpleServer simpleServer = new SimpleServer(port);
			System.out.println( "Now serving files in port " + port + " from \"" +
					new File("").getAbsolutePath() + "\"" );
			System.out.println( "Hit Enter to stop.\n" );
		} catch (IOException e) {
			e.printStackTrace();
		}
		try { System.in.read();
		} catch( Throwable t ) {};
	}
}
