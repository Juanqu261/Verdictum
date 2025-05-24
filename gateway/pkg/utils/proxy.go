package utils

import (
	"io"
	"net/http"
)

func ProxyRequest(w http.ResponseWriter, r *http.Request, targetURL string) {
	resp, err := http.Get(targetURL)
	if err != nil {
		http.Error(w, "Error al conectar con el servicio destino", http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	w.WriteHeader(resp.StatusCode)
	io.Copy(w, resp.Body)
}
