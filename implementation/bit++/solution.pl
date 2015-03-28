#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
use 5.012;

my $n = <>;

my $i;
$i += <> =~ /-/ ? -1 : 1 for 1..$n;

print $i;
