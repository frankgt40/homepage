---
path: "/blog-1"
date: "2018-06-28"
title: "Building Skyway Spark"
author: "Cheng Cai"
---

# Building procedure

First, we need to build Skyway's JDK:

```bash
./configure
make all
```

Second, we set the environment variables:

```bash
export JAVA_HOME=/the/path/to/the/built/jdk
export PATH=$JAVA_HOME/bin:$PATH
```

Third, the zinc server needs to be stopped:
```bash
./build/zinc-0.3.9/bin/zinc -shutdown
```
*This step is crucial, otherwise maven won't find the Skyway serializer's types.*

Finally, we can use the build script to build the Skyway Spark:
```bash
./skyway_build.sh
```