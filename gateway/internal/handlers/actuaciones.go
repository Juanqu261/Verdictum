package handlers

import (
	"net/http"
	"os"

	"github.com/Juanqu261/gateway/pkg/utils"
	"github.com/gorilla/mux"
)

func ActuacionesHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	backendURL := os.Getenv("BACKEND_URL")
	if backendURL == "" {
		backendURL = "http://localhost:3000"
	}

	utils.ProxyRequest(w, r, backendURL+"/actuaciones/"+id)
}
