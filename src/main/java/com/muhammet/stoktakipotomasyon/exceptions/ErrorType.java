package com.muhammet.stoktakipotomasyon.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public enum ErrorType {

    BAD_REQUEST_ERROR(1001, "Girilen bilgiler eksik ya da yanlıştır.",HttpStatus.BAD_REQUEST),
    BAD_REQUEST_REPASSWORD_ERROR(1002, "Girilen şifreler uyuşmuyor.",HttpStatus.BAD_REQUEST),
    BAD_REQUEST_USERNAME_OR_PASSWORD_ERROR(1003, "Kullanıcı ad ya da şifresi hatalıdır.", HttpStatus.BAD_REQUEST),
    BAD_REQUEST_INVALID_TOKEN(1004, "Geçersiz token.", HttpStatus.BAD_REQUEST),
    BAD_REQUEST_INVALID_MARKA_ID(1201, "Güncelleme hatası, Marka idsi yanlıştır.", HttpStatus.BAD_REQUEST),
    BAD_REQUEST_MARKA_ADI_ZATEN_KAYITLI(1202, "Bu Marka adı zaten kayıtlıdır.", HttpStatus.BAD_REQUEST),

    INTERNAL_SERVER_ERROR(9998,"Sunucuda beklenmeyen bir hata oluştu, Lütfen tekrar deneyiniz",HttpStatus.INTERNAL_SERVER_ERROR),
    INTERNAL_SERVER_ERROR_NOT_FOUND_DATA(9002,"Sunucu Hatası: Liste getirilemedi, lütfen tekrar deneyin", HttpStatus.INTERNAL_SERVER_ERROR);

    private Integer code;
    private String message;
    private HttpStatus httpStatus;
}
