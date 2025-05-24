package handlers

import (
	"net/http"
	"os"

	"github.com/Juanqu261/gateway/pkg/utils"
)

func UsuariosHandler(w http.ResponseWriter, r *http.Request) {
	backendURL := os.Getenv("BACKEND_URL")
	if backendURL == "" {
		backendURL = "http://localhost:3000"
	}
	utils.ProxyRequest(w, r, backendURL+"/usuarios")
}
