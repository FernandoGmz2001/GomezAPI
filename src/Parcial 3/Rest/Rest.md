# Principios de la Arquitectura REST

La arquitectura REST (Representational State Transfer) es un estilo de arquitectura de software para sistemas hipermedia distribuidos como la World Wide Web. Aquí están los seis principios (o restricciones) que definen una interfaz RESTful:

## 1. Cliente-Servidor
Esta restricción mantiene la separación de preocupaciones entre la interfaz de usuario y el almacenamiento de datos, lo que mejora la portabilidad del código de la interfaz de usuario a través de múltiples plataformas y la escalabilidad al simplificar los componentes del servidor.

## 2. Sin Estado
Cada solicitud de un cliente a un servidor debe contener toda la información necesaria para entender y completar la solicitud. El servidor no almacena el estado de la aplicación, lo cual mejora la escalabilidad al evitar que el servidor almacene estados de recursos voluminosos.

## 3. Cachéable
Las respuestas deben, implícita o explícitamente, definir si son cachéables o no. Si una respuesta es cachéable, el cliente tiene el derecho de reutilizar dicha respuesta para obtener un mejor rendimiento.

## 4. Interfaz Uniforme
El sistema REST se caracteriza por tener una interfaz uniforme que simplifica y desacopla la arquitectura, lo que permite a cada parte evolucionar de manera independiente. Las cuatro directrices para una interfaz uniforme son:
- Identificación de recursos en las solicitudes
- Representación de recursos cuando se devuelve una respuesta
- Mensajes auto descriptivos
- Hipermedios como motor del estado de la aplicación (HATEOAS)

## 5. Sistema en Capas
Un cliente no puede asumir que está conectado directamente a un servidor final. Intermediarios pueden mejorar la escalabilidad al proporcionar balanceo de carga y al proporcionar cachés compartidos. También pueden aplicar políticas de seguridad.

## 6. Código por Demanda (opcional)
Los servidores pueden extender temporalmente o personalizar la funcionalidad de un cliente transfiriendo código ejecutable. Es una restricción opcional y puede ser usada para enviar lógica del lado del servidor para ser ejecutada en el cliente.

La adherencia a estos principios es lo que define un servicio web o API como RESTful.
