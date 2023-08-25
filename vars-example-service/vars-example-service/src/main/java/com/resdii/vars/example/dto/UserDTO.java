package com.resdii.vars.example.dto;

import lombok.Data;

import java.math.BigInteger;

@Data
public class UserDTO {
    private BigInteger id;
    private String username;
    private String fullName;
}
