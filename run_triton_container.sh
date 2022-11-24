#!/bin/bash
docker stop -t 3 triton-example-server
docker run --rm -it --name triton-example-server \
    --runtime=nvidia --gpus=1 \
    --shm-size=1g --ulimit stack=67108864 \
    -p 8000:8000 -p 8001:8001 -p 8002:8002 \
    -v $(realpath ./models):/models \
    triton-example:22.10 \
    tritonserver \
    --disable-auto-complete-config \
    --strict-readiness=true \
    --exit-on-error=true \
    --model-repository=/models \
    --model-control-mode=explicit \
    --load-model=clip \
    --load-model=clip-preprocess \
    --load-model=clip-core \
    --log-verbose=1
