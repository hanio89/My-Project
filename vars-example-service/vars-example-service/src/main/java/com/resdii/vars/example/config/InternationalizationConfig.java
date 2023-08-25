package com.resdii.vars.example.config;

import com.resdii.ms.common.config.AbstractInternationalizationConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;

@Configuration
public class InternationalizationConfig extends AbstractInternationalizationConfig {

    @Bean
    public LocaleResolver localeResolver() {
        return new InternationalizationConfig();
    }

}
