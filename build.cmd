@echo off
REM Script de build para Sprint ENEM
REM Contorna a restricao de Application Control do Windows usando WASM fallback

echo Iniciando build do Sprint ENEM...
set NAPI_RS_FORCE_WASI=true
npm run build
echo Build concluido. Arquivos em /dist
