package com.resdii.vars.example.service.impl;

import com.resdii.vars.example.domain.User;
import com.resdii.vars.example.dto.UserDTO;
import com.resdii.vars.example.service.UserService;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;

@Service
public class UserServiceImpl extends BaseServiceImpl implements UserService {

    @Override
    public List<UserDTO> getListUser() {
        List<User> users = userRepository.getListUser();
        List<UserDTO> data = userMapper.toDest(users);
        return data;
    }

    @Override
    public UserDTO getUserDetail(BigInteger userId) {
        User user = userRepository.getUserDetail(userId);
        UserDTO data = userMapper.toDest(user);
        return data;
    }

}
