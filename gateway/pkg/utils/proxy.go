package utils

import (
	"io"
	"net/http"
)

func ProxyRequest(w http.ResponseWriter, r *http.Request, targetURL string) {
	req, err := http.NewRequest(r.Method, targetURL, r.Body)
	if err != nil {
		http.Error(w, "Error creando solicitud", http.StatusInternalServerError)
		return
	}

	// Copiar headers originales
	req.Header = r.Header

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		http.Error(w, "Error al conectar con el servicio destino", http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	// Copiar headers de respuesta
	for k, v := range resp.Header {
		w.Header()[k] = v
	}

	w.WriteHeader(resp.StatusCode)
	io.Copy(w, resp.Body)
}
