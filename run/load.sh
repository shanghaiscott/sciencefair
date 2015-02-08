#!/bin/bash
mkdir target
rm -rf target/WEB-INF
cp -r ../target/radd/WEB-INF target
CLASSPATH=
for J in target/WEB-INF/lib/*.jar; do
  CLASSPATH="${J}:${CLASSPATH}"
done
CLASSPATH="${CLASSPATH}:target/WEB-INF/classes"
echo "$CLASSPATH"

java -cp "$CLASSPATH" com.swdouglass.rad.DataLoader "$1" "mazur-prm8000" "$2"
