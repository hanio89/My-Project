package com.resdii.vars.example.service;

import com.resdii.vars.example.dto.UserDTO;

import java.math.BigInteger;
import java.util.List;

public interface UserService {
    List<UserDTO> getListUser();
    UserDTO getUserDetail(BigInteger userId);
}
