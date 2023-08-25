package com.resdii.vars.example.utils;

import com.resdii.vars.example.domain.User;
import com.resdii.vars.example.dto.UserDTO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataFake {
    public List<User> getListUser() {
        List<User> list = new ArrayList<>();
        list.add(getUserDetail());
        list.add(getUserDetail());
        list.add(getUserDetail());
        list.add(getUserDetail());
        list.add(getUserDetail());
        list.add(getUserDetail());
        list.add(getUserDetail());
        return list;
    }

    public User getUserDetail() {
        User user = new User();
        user.setFullName("Hoang Phu");
        user.setUsername("0384502893");
        return user;
    }
}
