package com.resdii.vars.example.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "noodev.backendless")
@Data
public class BackendlessConfig {

}
