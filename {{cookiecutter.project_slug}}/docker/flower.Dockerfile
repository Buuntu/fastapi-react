FROM mher/flower as base
USER root
COPY --from=ghcr.io/ufoscout/docker-compose-wait:latest /wait /wait
RUN chmod +x /wait
USER nobody