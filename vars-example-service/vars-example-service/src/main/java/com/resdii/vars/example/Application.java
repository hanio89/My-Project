package com.resdii.vars.example;

import com.resdii.ms.common.rest.NooApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableFeignClients
@EnableScheduling
@EnableConfigurationProperties
public class Application extends NooApplication {

	public static void main(String[] args) {
		runApplication(Application.class, args);
	}

}
