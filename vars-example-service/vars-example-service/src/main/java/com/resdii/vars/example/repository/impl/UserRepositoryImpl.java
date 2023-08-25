package com.resdii.vars.example.repository.impl;

import com.resdii.vars.example.domain.User;
import com.resdii.vars.example.repository.UserRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository {
    @Override
    public List<User> getListUser() {
        List<User> list = new ArrayList<>();
        list.add(new User(BigInteger.valueOf(1), "Alex", "012345678"));
        list.add(new User(BigInteger.valueOf(2), "Jerry", "876543210"));
        return list;
    }

    @Override
    public User getUserDetail(BigInteger userId) {
        return new User(userId, "Tom Henry", "0384502893");
    }
}
