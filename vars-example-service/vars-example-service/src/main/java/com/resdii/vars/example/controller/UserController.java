package com.resdii.vars.example.controller;

import com.resdii.ms.common.rest.BaseRestController;
import com.resdii.ms.common.utils.RestUtils;
import com.resdii.vars.example.service.UserService;
import com.resdii.vars.example.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigInteger;

@RestController
@RequestMapping("/users")
public class UserController extends BaseRestController {

    private UserService userService;

    /**
     * example
     * @param
     * @return
     */
    @GetMapping
    public ResponseEntity getListUser() {
        return RestUtils.responseOk(userService.getListUser());
    }

    @GetMapping("/{userId}")
    public ResponseEntity getUserDetail(@PathVariable("userId") BigInteger userId) {
        return RestUtils.responseOk(userService.getUserDetail(userId));
    }

    @Autowired
    public void setUserService(UserServiceImpl userService) {
        this.userService = userService;
    }
}
