#!/bin/bash -x
docker run --rm -it --name notebook \
    --gpus all --ipc=host --ulimit memlock=-1 --ulimit stack=6710886 \
    -p 8888:8888 -v $(realpath .):/workspace \
    nvidia-pytorch-notebook:22.10
