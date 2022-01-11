#!/bin/bash -eux

(cd packages/react-icons/ && yarn build)
echo VERSIONS; cat packages/react-icons/VERSIONS
(cd packages/_react-icons_all/ && npm pack & tail)
(cd packages/_react-icons_all-files/ && npm pack & tail)