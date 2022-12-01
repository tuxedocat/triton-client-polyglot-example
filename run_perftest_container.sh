#!/bin/bash
docker run -it --rm --gpus all \
  --shm-size=4g --ulimit stack=67108864 \
  -v $(realpath ./perftest):/perftest:rw \
  -v $(realpath ./models):/models:ro \
  --net=host -P -p8000:8000 -p8001:8001 -p8002:8002 \
  --name model-analyzer model-analyzer:latest \
  model-analyzer profile -f /perftest/model_analyzer_config.yaml 
