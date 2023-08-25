package com.resdii.vars.example.service.impl;

import com.resdii.ms.common.rest.AbstractServiceImpl;
import com.resdii.vars.example.mapper.UserMapper;
import com.resdii.vars.example.repository.UserRepository;
import com.resdii.vars.example.repository.impl.UserRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;

public class BaseServiceImpl extends AbstractServiceImpl {

    protected UserRepository userRepository;
    protected UserMapper userMapper;

    @Autowired
    public void setUserMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Autowired
    public void setUserRepository(UserRepositoryImpl userRepository) {
        this.userRepository = userRepository;
    }
}
