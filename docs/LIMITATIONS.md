# Prototype boundaries

Actor context is assumed trusted by the core. Do not create it from an unverified request body. Authentication and role validation belong at the future transport boundary.
