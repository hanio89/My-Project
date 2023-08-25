package com.resdii.vars.example.mapper;

import com.resdii.ms.common.mapper.IMapperConfig;
import com.resdii.vars.example.domain.User;
import com.resdii.vars.example.dto.UserDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", config = IMapperConfig.class)
public interface UserMapper extends IBaseMapper<User, UserDTO>{
}
