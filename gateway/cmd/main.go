package main

import (
	"log"
	"net/http"
	"os"

	"github.com/Juanqu261/gateway/internal/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println("No se pudo cargar .env, usando variables de entorno del sistema")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	r := mux.NewRouter()
	r.HandleFunc("/api/usuarios", handlers.UsuariosHandler)

	log.Printf("Gateway corriendo en http://localhost:%s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, r))
}
