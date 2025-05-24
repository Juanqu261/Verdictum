package handlers

import (
	"net/http"
	"os"
	"strings"

	"github.com/Juanqu261/gateway/pkg/utils"
	"github.com/gorilla/mux"
)

func ProcessHandler(w http.ResponseWriter, r *http.Request) {
	backendURL := os.Getenv("BACKEND_URL")

	// Obtener el radicado desde los parámetros de la ruta
	vars := mux.Vars(r)
	radicado := vars["radicado"]
	targetURL := strings.TrimRight(backendURL, "/") + "/process/" + radicado

	utils.ProxyRequest(w, r, targetURL)
}
