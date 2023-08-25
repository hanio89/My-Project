package com.resdii.vars.example.repository;

import com.resdii.vars.example.domain.User;

import java.math.BigInteger;
import java.util.List;

public interface UserRepository {
    List<User> getListUser();
    User getUserDetail(BigInteger userId);
}
