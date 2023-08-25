package com.resdii.vars.example.error;

import com.resdii.ms.common.exception.IExceptionHandler;
import feign.FeignException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;

import javax.validation.ConstraintViolationException;

@ControllerAdvice
public class ExceptionHandler implements IExceptionHandler {

    @Override
    public ResponseEntity handleAccessDeniedException(AccessDeniedException ex) {
        return IExceptionHandler.super.handleAccessDeniedException(ex);
    }

    @Override
    public ResponseEntity handleAuthenticationException(AuthenticationException ex) {
        return IExceptionHandler.super.handleAuthenticationException(ex);
    }

    @Override
    public ResponseEntity handleCommonException(Exception ex) {
        return IExceptionHandler.super.handleCommonException(ex);
    }

    @Override
    public ResponseEntity handleMethodArgumentException(MethodArgumentNotValidException ex) {
        return IExceptionHandler.super.handleMethodArgumentException(ex);
    }

    @Override
    public ResponseEntity handleConstraintViolationException(ConstraintViolationException ex) {
        return IExceptionHandler.super.handleConstraintViolationException(ex);
    }

    @Override
    public ResponseEntity handleMissingPartException(Exception ex) {
        return IExceptionHandler.super.handleMissingPartException(ex);
    }

    @Override
    public ResponseEntity handleFeignException(FeignException ex) {
        return IExceptionHandler.super.handleFeignException(ex);
    }
}
