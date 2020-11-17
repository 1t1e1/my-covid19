## Todos

- [ ] Write tests
- [ ] Add world map
- [ ] Add style
- [ ] make method for desc & asc for all keyword.
- [ ] mainpage comp un icindeki usefetch daha genel yazmak lazim.
- [ ] Table custom style
- [ ] isloading hoc [blog](https://blog.bitsrc.io/building-a-universal-higher-order-component-page-loader-for-your-react-app-46d74f7a6958)
- [ ] error boundary component

## Completed

- [x] Script yerine `api/countries` kullanilmasi daha ii olabilir.
- [x] Sifir probleminin documentasyonunu yaz.
- [x] US, Mexico etc recovered count 0. why?

### Maybes;

- [ ] Auto Country Location
- [ ] Count self page.

# ISSUES

## #1 (ZERO PROBLEM)

**PROB :** Bazi ulkelerin datalari 0 olarak geliyor.

**OBS 1:** `api/recovered` yerine digerlerinini (deaths veya confimed) de koyularsam sorun cozulmuyor. Diger end pointlarde de farkli ulkeler, entryler 0 oluyor.

**OBS 2:** Api dan gelen datalarda eksikler var. Tum istatisligi %92 gibi bir kismini gosteriyor.

| `api/recovered`                  | `api/deaths` or `api/confirmed`  |
| -------------------------------- | :------------------------------- |
| Peru data                        | Peru data                        |
| "confirmed": 0, #:x:             | "confirmed": #:heavy_check_mark: |
| "recovered": #:heavy_check_mark: | "recovered": 0, # :x:            |
| "deaths": 0, #:x:                | "deaths": #:heavy_check_mark:    |

**SOL :** 1 endpoint yerine 2 endpointe istek atip, sonuclari birlestirerek datanin %100 u elde edilebilir.

## #2 THERE IS NO DATA

**PROB :** Bazi ulkelerin datalari api da sifir 0.

**OBS 1:** Belgium `api/countries/be` veya Serbia `api/countries/rs` bakilinca recovered datasinin 0 oldugu goruluyor.

**SOL :** Frontendle ilgili degil.
